from app.models import db, Review


def seed_reviews():
    reviewDemo1 = Review(
        trailId = 3,
        userId = 1,
        review = 'Hello this is a test',
        stars = 4,
        reviewImg = "https://www.wheredoitakethekids.com/wp-content/uploads/2019/12/borealMountain-13-scaled.jpg"
    )
    reviewDemo2 = Review(
        trailId = 4,
        userId = 1,
        review = "Hello this is a test",
        stars = 3,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg"
    )
    # MARNIE OWNS BOREAL
    reviewMarnie1 = Review(
        trailId = 1,
        userId = 2,
        review = "Hello this is a test",
        stars = "4",
        reviewImg = "https://cdn.sierrasun.com/wp-content/uploads/sites/4/2016/08/SS_SS200910911129994AR.jpg"
    )
    reviewMarnie2 = Review(
        trailId = 2,
        userId = 2,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "http://static1.squarespace.com/static/5f5b750c2612de46c3a1cbe2/t/6164d43dddd4d97f9f572883/1633998671113/Boreal+Terrain+Park.jpeg?format=1500w"
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
        review = "Hello this is a test",
        stars = 3,
        reviewImg = "https://www.babyquip.com/blog/wp-content/uploads/2020/01/heavenly-16.jpg"
    )
    reviewMarnie12 = Review(
        trailId = 12,
        userId = 2,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://img.theepochtimes.com/assets/uploads/2021/03/14/son.jpg"
    )
    #BOBBIE OWNS HEAVENLY
    reviewBobbie1 = Review(
        trailId = 1,
        userId = 3,
        review = "Hello this is a test",
        stars = 5,
        reviewImg = "https://www.athletesinsight.com/wp-content/uploads/2018/02/DSC01031-2-1024x683.jpg"
    )
    reviewBobbie2 = Review(
        trailId = 2,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Boreal_Mountain_Resort_-_panoramio.jpg/1200px-Boreal_Mountain_Resort_-_panoramio.jpg"
    )
    reviewBobbie3 = Review(
        trailId = 3,
        userId = 3,
        review = "Hello this is a test",
        stars = 2,
        reviewImg = "https://www.athletesinsight.com/wp-content/uploads/2018/02/DSC01027-2-1024x683.jpg"
    )
    reviewBobbie4 = Review(
        trailId = 4,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://d6qyz3em3b312.cloudfront.net/upload/images/media/2012/01/10/5470668716_572860471a_b.2048x1024.jpg"
    )
    reviewBobbie5 = Review(
        trailId = 5,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/VcLrnqaUSpeGH35ry4sSXw/o.jpg"
    )
    reviewBobbie6 = Review(
        trailId = 6,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/uM9jucwJH6SfhVr-_6di9Q/o.jpg"
    )
    reviewBobbie7 = Review(
        trailId = 7,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://fox40.com/wp-content/uploads/sites/13/2021/10/boreal.jpg"
    )
    reviewBobbie8 = Review(
        trailId = 8,
        userId = 3,
        review = "Hello this is a test",
        stars = 5,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/8BjsoIFWF25Ve7ov_Dl2tg/o.jpg"
    )
    reviewBobbie9 = Review(
        trailId = 9,
        userId = 3,
        review = "Hello this is a test",
        stars = 4,
        reviewImg = "https://cdn.sierrasun.com/wp-content/uploads/sites/4/2017/11/BorealOpener-SSU-111017-1.jpg"
    )
    reviewBobbie10 = Review(
        trailId = 10,
        userId = 3,
        review = "Hello this is a test",
        stars = 5,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/getting-to-boreal.jpg"
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