# Standard library imports

# Remote library imports
import os
from dotenv import load_dotenv 
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData



load_dotenv()


# Local imports

# Instantiate app, set attributes
app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/dist',
    template_folder='../client/dist'
)
# if folder is build instead, make sure to change path to /build instead of /dist


app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://template_db_25x6_user:YRDeHmVcVspt63ItjXfbNmkNwLP7eWMG@dpg-cr6u4e3tq21c73frcr30-a.ohio-postgres.render.com/template_db_25x6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False



# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)
