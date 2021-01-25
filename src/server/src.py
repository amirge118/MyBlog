from flask import Flask, request, abort, make_response
import mysql.connector as mysql
import json
import uuid
import bcrypt


db = mysql.connect(
    host="localhost",
    user="root",
    passwd="YES",
    database="world")

print(db)

app = Flask(__name__)



@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/cities', methods=['GET', 'POST'])
def manage_post():
    if request.method == 'GET':
        return get_all_post()
    else:

        return add_city()


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    query ="select id from users where username =(%s) and password = (%s) "
    cursor = db.cursor()
    values = [data['name'], data['pass']]
    cursor.execute(query, values)
    records = cursor.fetchone()
    if not records:
        abort(401)
    user_id = records[0]
    hashed_pwd= records[1].encode('utf-8')
    if bcrypt.hashpw(data['pass'].encode('utf-8'), hashed_pwd)!= hashed_pwd:
        abort(401)

    session_id = str(uuid.uuid4())


    query = "insert into session (user_id , session_id) values (%s, %s) on duplicate key update session_id=(%s)"
    values = (user_id, session_id ,session_id)
    cursor.execute(query,values)
    db.commit()
    resp = make_response()
    resp.set_cookie("session_id", session_id)
    return resp


def add_city():
    data = request.get_json()
    query = "insert into posts ( title,content,published,author )values (%s,%s,%s,%s,)"
    values = (data['title'], data['content'], data['published'], data['author'])
    cursor = db.cursor
    cursor.execute(query, values)
    db.commit()
    new_post_id = cursor.lastrowid
    cursor.close()
    return get_city(new_post_id)


def get_city(id):
    query = "select id,title,content,published,author from posts where id =%s"
    values = (id,)
    cursor = db.cursor()
    cursor.execute(query,values)
    record = cursor.fetchone()
    header = ['id', 'title', 'content', 'published', 'author']
    return json.dumps(dict(zip(header, record)))

def check_login():
    session_id= request.cookies.get('session_id')
    if not session_id:
        abort(401)
    query = "select user_id from session_id = (%s)"
    values = (session_id, )
    cursor = db.cursor()
    cursor.execute(query , values)
    record = cursor.fetchone()
    if not record:
        abort(401)




def get_all_post():
    query = "select id, title, content, published, author from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    header = ['id', 'title', 'content', 'published', 'author']
    data = []
    for r in records:
        data.append(dict(zip(header, r)))
    return json.dumps(data)


if __name__ == "__main__":
    app.run()

