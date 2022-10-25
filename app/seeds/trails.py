from app.models import db, Trail


def seed_trails():
    trail1 = Trail(
        name = "testtrail",
        country = "United States of America",
        state = "California", 
        mountain = "testmountain",
        resort = "Mammoth",
        difficulty = "Intermediate",
        description = "test",
        length = "1.1", 
        elevation = "2,000",
        routeType = "Park",
        previewImg = "testimg"
    )
    # trail2 = Trail(
    #     name = "",
    #     country = "United States of America",
    #     state = "California", 
    #     mountain = "",
    #     resort = "",
    #     difficulty = "",
    #     description = "",
    #     length = "", 
    #     elevation = "",
    #     routeType = "",
    #     previewImg = ""
    # )

    
    db.session.add(trail1)
    db.commit()

def undo_trails():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
