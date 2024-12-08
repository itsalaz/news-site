#!/usr/bin/env python3

from flask import request
from config import app, db, api
# Add your model imports


URL_PREFIX = '/api'

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")
# make sure dist folder is created -- $gunicorn app:app
# make sure $pipenv install psycopg2 - binary and gunicorn is installed


@app.route('/')
def index():
    return '<h1>Project Server</h1>'


@app.get('/') # will show you react side 
def get_route():
    pass





if __name__ == '__main__':
    app.run(port=5555, debug=True)

