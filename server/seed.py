from config import app, db
from models import User, Ad 
from random import randint, choice as rc
from faker import Faker
from app import app
from models import db
from datetime import datetime



fake = Faker()


def seed_database():
  with app.app_context():
    print("Database URI:", db.engine.url)
    print("Start seed...")
    print("Clearing old data...")



    User.query.delete()

    db.session.commit()


    users = [User(username=fake.user_name(), password=fake.password(), email=fake.email(), phone=fake.phone()) for _ in range(5)]
    db.session.bulk_save_objects(users)
    db.session.commit()



if __name__ == '__main__':
  seed_database()