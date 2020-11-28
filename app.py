from flask import Flask, render_template, redirect
import scrape_mars
from pymongo import MongoClient
mongo = MongoClient("mongodb://localhost:27017/marshomework")
app = Flask(__name__)

#defining home route
@app.route("/")
# defining the function
def index():
    marsdata = mongo.db.marsdata.find_one()

    return render_template ("index.html", mars = marsdata)

#defining the scrape route
@app.route("/scrape")
def scrape():
    marsdata = mongo.db.marsdata
    scrapedata = scrape_mars.scrape()
    marsdata.update({},scrapedata,upsert=True)
    return "scraping successful"
if __name__ =="__main__":
    app.run(debug=True)

