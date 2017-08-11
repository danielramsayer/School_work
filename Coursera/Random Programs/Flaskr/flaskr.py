#These are the import files
import os, sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

#creating our application part
app = Flask(__name__)
app.config.from_object(__name__)

#we're laying default config and override config from an environment variable
app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'flaskr.db'),
    SECRET_KEY='development key',
    USERNAME='admin',
    PASSWORD='default'
))
app.config.from_envvar('FLASKR_SETTINGS', silent=True)

def connect_db():
    #connects to specific db
    rv = sqlite3.connectr(app.config['DATABASE'])
    rv.row_factory = sqlite3.Row
    return rv
