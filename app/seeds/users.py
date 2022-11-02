import email
from app.forms.login_form import password_matches
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', firstName='Demo', lastName='User', email='demo@aa.io', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/hipster_beard_male_man-512.png')
        #BOREAL
    marnie = User(
        username='Marnie', firstName='Marnet', lastName='Hart', email='marnie@aa.io', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait-512.png')
        #HEAVENLY
    bobbie = User(
        username='Bobbie', firstName='Bob', lastName='Hart', email='bobbie@aa.io', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_man_male_avatar-512.png')
        #MAMMOTH
    jeff = User(
        username='Jeffellow', firstName='Jeff', lastName='Campbell', email='jeffcamp@mail.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-512.png')
        #BEAR
    ted = User(
        username='Tedster', firstName='Ted', lastName='Baker', email='thebaker@mail.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-512.png')
        #MTHIGH
    hope = User(
        username='AznxHopex', firstName='Hope', lastName='Kim', email='hope314@yahoo.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-512.png')
    peter = User(
        username='Spiderman321', firstName='Peter', lastName='Parker', email='therealspiderguy@mail.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-512.png')
    ron = User(
        username='Lagavulin501', firstName='Ron', lastName='Swanson', email='steakisthebest@mail.net', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png')
    corey = User(
        username='Radsk8ter', firstName='Corey', lastName='Birch', email='birchwall@mail.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-512.png')
    eddy = User(
        username='thebesteddy', firstName='Eddy', lastName='Smith', email='cartonnetworkyyy@mail.com', password='password2', profileImg='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_person_avatar_kid-512.png')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jeff)
    db.session.add(ted)
    db.session.add(hope)
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
