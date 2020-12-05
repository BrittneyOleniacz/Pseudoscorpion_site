from flask import Flask, render_template, request
import json
import psycopg2
import csv

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="Project2",
    user="postgres",
    password="postgres")


# @app.route("/Dating_data")
# def scrape():
#     cur = conn.cursor(cursor_factory=RealDictCursor)
#     cur.execute("""   SELECT * FROM Dating_data """)
#     return json.dumps(cur.fetchall())

# @app.route("/PBDB_Review")
# def scrape():
#     cur = conn.cursor(cursor_factory=RealDictCursor)
#     cur.execute("""   SELECT * FROM PBDB_Review """)
#     return json.dumps(cur.fetchall())

# @app.route("/works_cited")
# def scrape():
#     cur = conn.cursor(cursor_factory=RealDictCursor)
#     cur.execute("""   SELECT * FROM works_cited """)
#     return json.dumps(cur.fetchall())

# @app.route("/WSC_fossils")
# def scrape():
#     cur = conn.cursor(cursor_factory=RealDictCursor)
#     cur.execute("""   SELECT * FROM WSC_fossils """)
#     return json.dumps(cur.fetchall())

@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/")
def home():
    return render_template("present.html")

@app.route("/present.html")
def past():
    return render_template("present.html")

@app.route("/past.html")
def past():
    return render_template("past.html")

@app.route("/future.html")
def future():
    return render_template("future.html")

@app.route("/contact.html")
def contact():
    return render_template("contact.html")

@app.route("/works_cited.html")
def workscited():
    return render_template("works_cited.html")

@app.route("/loc_data")
def scrape():
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute("SELECT * loc_data")
    return json.dumps(cur.fetchall())

if __name__ =="__main__":
    app.run(debug=True)

