from flask import Flask,render_template,url_for
import requests
from flask import request


#r=requests.get(url = 'https://resell-backend.herokuapp.com/api/products')
#secproducts= r.json()
#books=requests.get(url='https://resell-server.herokuapp.com/api/products/tags/books')
#books=books.json()
#cycle=requests.get(url='https://resell-server.herokuapp.com/api/products/tags/cycle')
#cycle=cycle.json()
#stationery=requests.get(url='https://resell-server.herokuapp.com/api/products/tags/stationery')
#stationery=stationery.json()

secproducts={'products': [{'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621871611/yx6hj8nmyfkupkeuel8d.jpg', 'category': 'cycle', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abcbfb681d3a00158d37c3', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621874074/dimjevikidefhnkoii6f.jpg', 'category': 'books', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abd59a681d3a00158d37c4', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621874117/cmoc73rif0eqs6pdprfn.jpg', 'category': 'stationery', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abd5c6681d3a00158d37c5', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621874143/i3ekcnqhuepkqerptkld.jpg', 'category': 'other', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abd5e0681d3a00158d37c6', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621874432/bf9wfweai0pfag7hgjlc.jpg', 'category': 'other', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abd701681d3a00158d37c7', 'title': 'string', 'description': 'string', 'price': 12, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621874435/c111npxgbhnnirfndbsy.jpg', 'category': 'other', 'date': '2021-05-24T15:52:55.825Z', '_id': '60abd704681d3a00158d37c8', 'title': 'string', 'description': 'string', 'price': 54, 'user': '60aad2b1dc39903fd8fa25db', 'name':'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621808685/juky6owyby9pwwixy9ma.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad62d9606b90015e52c06', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809153/amgorg9iekqop1zaznxk.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad8029606b90015e52c07', 'title': 'test', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809177/clc9sbrp2caauso6pgru.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad81a9606b90015e52c08', 'title': 'test', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809199/blyvlp4inem7dxnqi5wu.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad82f9606b90015e52c09', 'title': 'test', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809297/lug9jylbetgki78xywsl.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad8929606b90015e52c0a', 'title': 'testing', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809513/k1bwmj3bgqxwsrpu3iqy.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad96a9606b90015e52c0b', 'title': 'testing', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621809619/hxqjrxwf2nl0t3v4g2jj.jpg', 'category': 'string(optional)', 'date': '2021-05-23T22:20:41.970Z', '_id': '60aad9d49606b90015e52c0c', 'title': 'testing', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}, {'image': 'http://res.cloudinary.com/dpltqbgox/image/upload/v1621808171/famrik5nqajenammrqkc.jpg', 'category': 'string (optional)', 'date': '2021-05-23T22:15:53.494Z', '_id': '60aad42c521cd427d41c8ba6', 'title': 'string', 'description': 'string', 'price': 123, 'user': '60aad2b1dc39903fd8fa25db', 'name': 'supraja', 'contact': '+918903647174', '__v': 0}]}
books=[{"category":"books","date":"2021-05-24T15:52:55.825Z","_id":"60abd59a681d3a00158d37c4","title":"string","description":"string","price":123,"image":"http://res.cloudinary.com/dpltqbgox/image/upload/v1621874074/dimjevikidefhnkoii6f.jpg","user":"60aad2b1dc39903fd8fa25db","name":"supraja","contact":"+918903647174","__v":0}]
cycle=[{"category":"cycle","date":"2021-05-24T15:52:55.825Z","_id":"60abcbfb681d3a00158d37c3","title":"string","description":"string","price":123,"image":"http://res.cloudinary.com/dpltqbgox/image/upload/v1621871611/yx6hj8nmyfkupkeuel8d.jpg","user":"60aad2b1dc39903fd8fa25db","name":"supraja","contact":"+918903647174","__v":0}]
stationery=[{"category":"stationery","date":"2021-05-24T15:52:55.825Z","_id":"60abd5c6681d3a00158d37c5","title":"string","description":"string","price":123,"image":"http://res.cloudinary.com/dpltqbgox/image/upload/v1621874117/cmoc73rif0eqs6pdprfn.jpg","user":"60aad2b1dc39903fd8fa25db","name":"supraja","contact":"+918903647174","__v":0}]

value_id=1
app=Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/log')
def loginnnn():
    return render_template('login.html')

@app.route('/login')
def login():
    email= request.args.get('email')
    password=request.args.get('password')
    url = 'https://resell-server.herokuapp.com/api/users/login'
    myobj = {"email": email,"password": password}
    x = requests.post(url, data = myobj)
    #x.text
    #text={"_id": "60aad2b1dc39903fd8fa25db","name": "supraja","email": "supraja.spamm@gmail.com","contact": "+918903647174","token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWFkMmIxZGMzOTkwM2ZkOGZhMjVkYiIsImlhdCI6MTYyMjAxMDg2MCwiZXhwIjoxNjI0NjAyODYwfQ.x-PSq9hr36jhSne4T_Cxbiy5cXxklLVElMGWIFowM1k"}
    return render_template('dashboard.html',data=x.text)

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/products')
def products():
    return render_template('products.html',posts=secproducts['products'])

@app.route('/books')
def books():
    return render_template('bookproducts.html',posts=books)

@app.route('/get_id')
def get_data():
   value = request.args.get('value')
   #info=str('https://resell-backend.herokuapp.com/api/products'+'/'+value)
   #r1=requests.get(url = info)
   #secproducts1= r1.json()
   #print(secproducts1)
   

@app.route('/cycle')
def cycle():
    return render_template('cycleproducts.html',posts=cycle)

@app.route('/statproducts')
def stats():
    return render_template('statproducts.html',posts=stationery)

@app.route('/profile')
def profile():
    return render_template('userprofile.html')

@app.route('/create')
def create():
    return render_template('createproduct.html')

@app.route('/productview')
def productview():
    product={"image":"http://res.cloudinary.com/dpltqbgox/image/upload/v1621871611/yx6hj8nmyfkupkeuel8d.jpg","category":"cycle","date":"2021-05-24T15:52:55.825Z","_id":"60abcbfb681d3a00158d37c3","title":"string","description":"string","price":123,"user":"60aad2b1dc39903fd8fa25db","name":"supraja","contact":"+918903647174","__v":0}
    return render_template('productview.html',product=product)



if(__name__ == "__main__"):
    app.run(debug=True)