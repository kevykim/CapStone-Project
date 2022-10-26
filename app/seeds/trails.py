from app.models import db, Trail


def seed_trails():
    trail1 = Trail(
        name = "testtrail",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth",
        difficulty = "Intermediate",
        description = "test",
        length = "1.1", 
        elevation = "2,000",
        routeType = "Park",
        previewImg = "testimg",
        userId = 1
    )
    # trail2 = Trail(
    #     name = "",
    #     country = "United States of America",
    #     state = "California", 
    #     resort = "",
    #     difficulty = "",
    #     description = "",
    #     length = "", 
    #     elevation = "",
    #     routeType = "",
    #     previewImg = "",
    #     userId = ""
    # )

    
    db.session.add(trail1)
    db.session.commit()

def undo_trails():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
