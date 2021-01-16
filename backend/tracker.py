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
    # dob = request.args.get('dob')
    # name = request.args.get('name')
    # username = request.args.get('username')
    # email = request.args.get('email')
    # pw = request.args.get('pw')
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


app.run()
