import json
from flask import Flask, request, render_template, jsonify
# import database
from flask_mysqldb import MySQL



app = Flask(__name__)

# db configuration required for our Flask
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'drishti'
app.config['MYSQL_DB'] = 'period_tracker'

mysql = MySQL(app)

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
    cur = mysql.connection.cursor()
    #cur.execute("SELECT Email_id, Name FROM User_Account WHERE User_ID=" + id)
    cur.execute('''SELECT * 
                   FROM user_period as UP, Period_Dates as PD
                   WHERE UP.Username =''' + id + ''' AND PD.period_ID = UP.period_ID;''')
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    # return as json
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    #adding str to make date serializable
    return json.dumps(json_data, default=str)


app.run()
