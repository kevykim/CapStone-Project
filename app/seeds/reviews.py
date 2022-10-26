from app.models import db, Review


def seed_reviews():
    review1 = Review(
        trailId = 1,
        userId = 1,
        review = 'Hello this is a test',
        stars = 4,
        reviewImg = "This is a test image"
    )
    # review2 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )

    db.session.add(review1)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()