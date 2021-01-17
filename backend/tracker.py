import json, random
from flask import Flask, request, render_template, jsonify
# import database
from flask_mysqldb import MySQL
from flask_cors import CORS


app = Flask(__name__)
CORS(app) 

# db configuration required for our Flask
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'drishti'
app.config['MYSQL_DB'] = 'period_tracker'

mysql = MySQL(app)
serverRandom = 0

@app.route('/')
def index():
    
    return "<html><head></head><body><b>home!</b></body></html>"

"""
def index():
    return render_template('index.html')
"""

@app.route("/user", methods=['GET'])

def page2():

    id = request.args.get('id')

    # create db connection
    cur = mysql.connection.cursor()

    # get data from db for that id
    cur.execute('''SELECT * 
                   FROM user_period as UP, Period_Dates as PD
                   WHERE UP.Username ="''' + id + '''" AND PD.period_ID = UP.period_ID;''')

    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    # return as json
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    #adding str to make date serializable
    cur.close()
    return json.dumps(json_data, default=str)

@app.route("/search", methods=['GET'])
def search_field():
    username = request.args.get('username')
    cur = mysql.connection.cursor()
    cur.execute('''SELECT Username FROM 
                User_Account as UA WHERE 
                UA.Username ="''' + username + '''";''')

    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    # return as json
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    #adding str to make date serializable

    cur.close()
    return json.dumps(json_data, default=str)

@app.route("/authentication", methods=['POST'])
def authenticate():
    #email = request.args.get('email')
    #pw = request.args.get('pw')
    dict_data = request.get_json()
    email = dict_data['email']    
    pw = dict_data['pw']
    #print("password i ",pw)
    cur = mysql.connection.cursor()
    cur.execute('''SELECT Username FROM 
                User_Account as UA WHERE 
                UA.Email_id ="''' + email + 
                '''" AND UA.Password_Hash ="'''+ pw + '''";''')

    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    # return as json
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    #adding str to make date serializable
    if len(json_data) == 0:
        print("credential doesn't exist")
        json_dict = {
        'error': 'Invalid Credentials'}
        json_data.append(json_dict)
    json_data = json.dumps(json_data, default=str)
    cur.close()
    #print("json data", json_data)
    return json_data

@app.route("/signup", methods = ['POST'])
def sign_up():
    dict_data = request.get_json()
    dob = dict_data['dob']
    name = dict_data['name']
    username = dict_data['username']
    email = dict_data['username']
    pw = dict_data['pw']
    cur = mysql.connection.cursor()
    #check if data alredy exists
    cur.execute('''SELECT * FROM 
                User_Account as UA WHERE 
                UA.Email_id ="''' + email +  '''";''')
    rv = cur.fetchall()   
    row_headers=[x[0] for x in cur.description] 
    json_data = []
    existing_data=[]
    for result in rv:
        existing_data.append(dict(zip(row_headers,result)))
    existing_data = json.dumps(existing_data, default=str)

    if existing_data != "[]":
        json_dict = {
        'error': 'Email exists'}
        json_data.append(json_dict)
        json_data = json.dumps(json_data) 
        print("Entry with same email already exists in database")
    else:        
        cur.execute('''INSERT INTO 
                    User_Account(Date_of_Birth,Email_id,Name,Username,Password_Hash)
                    VALUES
                    ("'''+ dob + '''","''' +
                    email + '''","''' + 
                    name + '''","'''+
                    username + '''","''' +
                    pw + '''");''')
        mysql.connection.commit()
        rv = cur.fetchall()

        #check if database has been updated
        cur.execute('''SELECT Username FROM 
                User_Account as UA WHERE 
                UA.Email_id ="''' + email + 
                '''" AND UA.Username ="'''+ username + '''";''')
        row_headers=[x[0] for x in cur.description] 
        rv = cur.fetchall()

        # return as json
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
        json_data = json.dumps(json_data, default=str)
        if json_data != "[]":
            print("Succesfully updated database")
        else:
            print("Could not update database")
    cur.close()
    return json_data

@app.route("/user/period/store", methods=['POST'])
def update_period_dates():
    dict_data = request.get_json()
    start = dict_data['start']
    end = dict_data['end']
    username = dict_data['username']
    cur = mysql.connection.cursor()

    cur.execute('''SELECT Username FROM 
                User_Account as UA WHERE 
                UA.Username ="''' + username + '''";''')

    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    # return as json
    existing_user=[]
    for result in rv:
        existing_user.append(dict(zip(row_headers,result)))
    existing_user = json.dumps(existing_user, default=str)
    #update only if user exists
    if existing_user != "[]":
    #check if period data for this user alredy exists
        cur.execute('''SELECT * FROM 
                    Period_Dates as PD, user_period as UP WHERE 
                    UP.Username ="''' + username +  
                    '''" AND PD.Start_period_date = "''' + start +
                    '''" AND PD.End_period_date = "''' + end + '''";''')
        rv = cur.fetchall()   
        row_headers=[x[0] for x in cur.description] 
        json_data = []
        existing_data=[]
        for result in rv:
            existing_data.append(dict(zip(row_headers,result)))
        existing_data = json.dumps(existing_data, default=str)

        if existing_data != "[]":
            json_dict = {
            'error': 'Exact period data for this user already exists'}
            json_data.append(json_dict)
            json_data = json.dumps(json_data) 
            print("Entry with same username and period already exists in database")
        else:        

            cur.execute('''INSERT INTO Period_Dates(Start_period_date, End_period_date)
                            VALUES("'''+ start + '''","'''
                            + end + '''");''')
            mysql.connection.commit()
            rv = cur.fetchall()

            current_period_id = cur.lastrowid
            cur.execute('''INSERT INTO user_period(Period_ID, Username)
                            VALUES("''' + str(current_period_id) + '''","''' + username + '''");''')
            mysql.connection.commit()
            rv = cur.fetchall()

            #check if database has been updated
            cur.execute('''SELECT * FROM 
                    user_period as UP, Period_Dates as PD
                    WHERE UP.Username ="''' + username + 
                    '''" AND PD.Period_ID = UP.Period_ID AND
                    PD.Start_period_date = "''' + start +
                    '''" AND PD.End_period_date = "''' + end 
                    + '''";''')

            row_headers=[x[0] for x in cur.description] 
            rv = cur.fetchall()

            # return as json
            json_data=[]
            for result in rv:
                json_data.append(dict(zip(row_headers,result)))
            json_data = json.dumps(json_data, default=str)
            if json_data != "[]":
                print("Succesfully updated database")
            else:
                print("Could not update database")
    else:
        json_data = []
        json_dict = {
        'error': 'User name doesnot exist'}
        json_data.append(json_dict)
        json_data = json.dumps(json_data) 
        print("This username doesn't exist in database")
    cur.close()

    return json.dumps(json_data, default=str)

app.run()
