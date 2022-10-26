from app.models import db, Review


def seed_reviews():
    reviewDemo1 = Review(
        trailId = 3,
        userId = 1,
        review = 'Hello this is a test',
        stars = 4,
        reviewImg = "This is a test image"
    )
    reviewDemo2 = Review(
        trailId = 4,
        userId = 1,
        review = "test",
        stars = 3,
        reviewImg = "test"
    )
    # MARNIE OWNS BOREAL
    reviewMarnie1 = Review(
        trailId = 1,
        userId = 2,
        review = "test",
        stars = "4",
        reviewImg = "test"
    )
    reviewMarnie2 = Review(
        trailId = 2,
        userId = 2,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    # reviewMarnie3 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie4 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie5 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie6 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie7 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie8 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie9 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewMarnie10 = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    reviewMarnie11 = Review(
        trailId = 11,
        userId = 2,
        review = "test",
        stars = 3,
        reviewImg = "test"
    )
    reviewMarnie12 = Review(
        trailId = 12,
        userId = 2,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    #BOBBIE OWNS HEAVENLY
    reviewBobbie1 = Review(
        trailId = 1,
        userId = 3,
        review = "test",
        stars = 5,
        reviewImg = "test"
    )
    reviewBobbie2 = Review(
        trailId = 2,
        userId = 3,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie3 = Review(
        trailId = 3,
        userId = 3,
        review = "test",
        stars = 2,
        reviewImg = "test"
    )
    reviewBobbie4 = Review(
        trailId = 4,
        userId = 3,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie5 = Review(
        trailId = 5,
        userId = 3,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie6 = Review(
        trailId = 6,
        userId = 3,
        review = "nice",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie7 = Review(
        trailId = 7,
        userId = 3,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie8 = Review(
        trailId = 8,
        userId = 3,
        review = "test",
        stars = 5,
        reviewImg = "test"
    )
    reviewBobbie9 = Review(
        trailId = 9,
        userId = 3,
        review = "test",
        stars = 4,
        reviewImg = "test"
    )
    reviewBobbie10 = Review(
        trailId = 10,
        userId = 3,
        review = "test",
        stars = 5,
        reviewImg = "test"
    )
    # reviewBobbie = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewBobbie = Review(
    #     trailId = "",
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )

 

    db.session.add(reviewDemo1)
    db.session.add(reviewDemo2)
    db.session.add(reviewMarnie1)
    db.session.add(reviewMarnie2)
    db.session.add(reviewMarnie11)
    db.session.add(reviewMarnie12)
    db.session.add(reviewBobbie1)
    db.session.add(reviewBobbie2)
    db.session.add(reviewBobbie3)
    db.session.add(reviewBobbie4)
    db.session.add(reviewBobbie5)
    db.session.add(reviewBobbie6)
    db.session.add(reviewBobbie7)
    db.session.add(reviewBobbie8)
    db.session.add(reviewBobbie9)
    db.session.add(reviewBobbie10)
    

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()