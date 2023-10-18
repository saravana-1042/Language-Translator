from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB configuration
client = MongoClient('mongodb://localhost:27017/')
db = client['MyDb']  
collection = db['User']

@app.route('/')
def signup():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup_post():
    username = request.form['username']
    password = request.form['password']
    
    existing_user = collection.find_one({'username': username})
    
    if existing_user:
        return 'User already exists!'
    else:
     
        collection.insert_one({'username': username, 'password': password})
        return render_template('index.html')

@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
