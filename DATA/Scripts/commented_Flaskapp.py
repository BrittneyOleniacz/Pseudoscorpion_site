from flask import Flask, render_template, request
import json
import psycopg2
#had to import psycopg2.extras for some reason//
import psycopg2.extras
import csv

#define app
app = Flask(__name__)
#define connection to SQL DB
conn = psycopg2.connect(
    host="localhost",
    database="Project2",
    user="postgres",
    password="postgres")
	
#Create routes to HTML pages through Flaskapp
#open flaskapp to index.html
@app.route("/index.html")
def index():
    return render_template("index.html")
@app.route("/")
def home():
    return render_template("index.html")
@app.route("/past.html")
def past():
    return render_template("past.html")
@app.route("/future.html")
def future():
    return render_template("future.html")
@app.route("/contact.html")
def contact():
    return render_template("contact.html")
@app.route("/present.html")
def present():
    return render_template("present.html")
@app.route("/works_cited.html")
def workscited():
    return render_template("works_cited.html")


#get data from connected DB
@app.route("/loc_data")
def scrape():
	#cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
	#DictCursor made an Array of arrays causing issues for defining the data values needed in the map.
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
	#RealDictCursor made an Array of dictionaries with the "column_name:data_value" structure, making it easier to call the needed data for the map. 
	#Execute the pull, select all, from loc_data table in SQL DB
    cur.execute("SELECT * from loc_data")
    #put in json.dumps to be used in map. 
	return json.dumps(cur.fetchall())

if __name__ =="__main__":
    app.run(debug=True)

