import email
from app.forms.login_form import password_matches
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', firstName='Demo', lastName='User', email='demo@aa.io', password='password2', profileImg='test')
        #BOREAL
    marnie = User(
        username='Marnie', firstName='Marnet', lastName='Hart', email='marnie@aa.io', password='password2', profileImg='test')
        #HEAVENLY
    bobbie = User(
        username='Bobbie', firstName='Bob', lastName='Hart', email='bobbie@aa.io', password='password2', profileImg='test')
    jeff = User(
        username='Jeffellow', firstName='Jeff', lastName='Campbell', email='jeffcamp@mail.com', password='password2', profileImg='test')
    ted = User(
        username='Tedster', firstName='Ted', lastName='Baker', email='thebaker@mail.com', password='password2', profileImg='test')
    christy = User(
        username='AznxChrissyx', firstName='Christy', lastName='Kim', email='christine314@yahoo.com', password='password2', profileImg='test')
    peter = User(
        username='Spiderman321', firstName='Peter', lastName='Parker', email='therealspiderguy@mail.com', password='password2', profileImg='test')
    ron = User(
        username='Lagavulin501', firstName='Ron', lastName='Swanson', email='steakisthebest@mail.net', password='password2', profileImg='test')
    corey = User(
        username='Radsk8ter', firstName='Corey', lastName='Birch', email='birchwall@mail.com', password='password2', profileImg='test')
    eddy = User(
        username='thebesteddy', firstName='Eddy', lastName='Smith', email='cartonnetworkyyy@mail.com', password='password2', profileImg='test')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jeff)
    db.session.add(ted)
    db.session.add(christy)
    db.session.add(peter)
    db.session.add(ron)
    db.session.add(corey)
    db.session.add(eddy)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
