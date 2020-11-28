from flask import Flask,render_template, request
import json
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="Project2",
    user="postgres",
    password="postgres")


@app.route("/Dating_data")
def scrape():
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""   SELECT * FROM Dating_data """)
    return json.dumps(cur.fetchall())

@app.route("/PBDB_Review")
def scrape():
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""   SELECT * FROM PBDB_Review """)
    return json.dumps(cur.fetchall())

@app.route("/works_cited")
def scrape():
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""   SELECT * FROM works_cited """)
    return json.dumps(cur.fetchall())

@app.route("/WSC_fossils")
def scrape():
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""   SELECT * FROM WSC_fossils """)
    return json.dumps(cur.fetchall())

@app.route("/loc_data")
def scrape():
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("""   SELECT * loc_data """)
    return json.dumps(cur.fetchall())

if __name__ =="__main__":
    app.run(debug=True)

