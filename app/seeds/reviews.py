from app.models import db, Review
from datetime import date

def seed_reviews():
    reviewDemo1 = Review(
        trailId = 3,
        userId = 1,
        review = "Boreal was quite cool. They had a two-story huge cafe, quick pass through gates when in pocket, and expedited rental service. Being Tahoe, the residents continued to be very laid-back, and the staff remained SUPER SKILLED at managing rescue crews. The Slopes continued opening and closing during the day, making movement around a challenge.",
        stars = 4,
        reviewImg = "https://www.wheredoitakethekids.com/wp-content/uploads/2019/12/borealMountain-13-scaled.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewDemo2 = Review(
        trailId = 4,
        userId = 1,
        review = "The Boreal was so cool. They boasted an enormous two-story cafe, easy entry through gates with a pocket pass, and quick rental service. Being Tahoe, the locals kept being incredibly laid-back, and the employees kept being SUPER SKILLED at running rescue teams. Throughout the day, the Slopes were opening and closing, making getting about difficult.",
        stars = 3,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 4, 18),
        updatedAt = date.today()
    )
    # MARNIE OWNS BOREAL
    reviewMarnie1 = Review(
        trailId = 1,
        userId = 2,
        review = "The Boreal was so cool. They boasted an enormous two-story cafe, easy entry through gates with a pocket pass, and quick rental service. Being Tahoe, the locals kept being incredibly laid-back, and the employees kept being SUPER SKILLED at running rescue teams. Throughout the day, the Slopes were opening and closing, making getting about difficult.",
        stars = "4",
        reviewImg = "https://cdn.sierrasun.com/wp-content/uploads/sites/4/2016/08/SS_SS200910911129994AR.jpg",
        createdAt = date(2022, 5, 15),
        updatedAt = date.today()
    )
    reviewMarnie2 = Review(
        trailId = 2,
        userId = 2,
        review = "The Boreal was so cool. They boasted an enormous two-story cafe, easy entry through gates with a pocket pass, and quick rental service. Being Tahoe, the locals kept being incredibly laid-back, and the employees kept being SUPER SKILLED at running rescue teams. Throughout the day, the Slopes were opening and closing, making getting about difficult.",
        stars = 4,
        reviewImg = "http://static1.squarespace.com/static/5f5b750c2612de46c3a1cbe2/t/6164d43dddd4d97f9f572883/1633998671113/Boreal+Terrain+Park.jpeg?format=1500w",
        createdAt = date(2022, 7, 4),
        updatedAt = date.today()
    )
    reviewMarnie3 = Review(
        trailId = 11,
        userId = 2,
        review = "Heavenly is wonderful. Although it is somewhat expensive, other than that it is fantastic, especially for families. In any case, the lodge features excellent meals, beautiful snow, and friendly locals. I adored everything, both the hearty homestyle dishes and the fancy fare!",
        stars = 3,
        reviewImg = "https://www.babyquip.com/blog/wp-content/uploads/2020/01/heavenly-16.jpg",
        createdAt = date(2022, 10, 5),
        updatedAt = date.today()
    )
    reviewMarnie4 = Review(
        trailId = 12,
        userId = 2,
        review = "Heavenly is wonderful. Although it is a touch pricy, it is still fantastic, especially for families. The food at the lodge is excellent, and the snow and people are all wonderful. Both the fancy fare and the substantial homestyle options were delicious to me.",
        stars = 4,
        reviewImg = "https://img.theepochtimes.com/assets/uploads/2021/03/14/son.jpg",
        createdAt = date(2022, 6, 21),
        updatedAt = date.today()
    )
    reviewMarnie5 = Review(
        trailId = 13,
        userId = 2,
        review = "Heavenly is amazing. While it is a little expensive, it is otherwise fantastic, especially for families. Regardless, the lodge's food is excellent, the snow was great, and the locals are quite kind. The sophisticated items as well as the substantial homestyle dishes were all delicious to me!",
        stars = 4,
        reviewImg = "https://images.squarespace-cdn.com/content/v1/5f379d0d4c13b4408dddc875/1598773748886-667UP3XZH04ZQNHB06VT/heavenly-ski-resort-lake-tahoe-usa-02.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewMarnie6 = Review(
        trailId = 14,
        userId = 2,
        review = "Heavenly is fantastic. Although it is a little expensive, other than that it is fantastic, especially for families. The food at the lodge is excellent, and the snow was amazing. I enjoyed everything, even the hearty homestyle dishes and the fancy fare.",
        stars = 5,
        reviewImg = "https://mytahoeskicabin.com/wp-content/uploads/sites/4/2015/05/tahoe-ski-cabin-activities-heavenly-mountain-resort.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewMarnie7 = Review(
        trailId = 15,
        userId = 2,
        review = "Heavenly is fantastic. Although it is a little expensive, other than that it is fantastic, especially for families. The food at the lodge is excellent, and the snow was amazing. I enjoyed everything, even the hearty homestyle dishes and the fancy fare.",
        stars = 4,
        reviewImg = "https://cache.undercovertourist.com/blog/2019/04/0419-heavenly-gondola-view-768x512.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewMarnie8 = Review(
        trailId = 16,
        userId = 2,
        review = "Additionally, the mountain is really well laid out, which makes moving from one location to another very simple. Of course, some of the speedier paths call for a little talent, but the mountain is enjoyable all around. Therefore, even if you have to take a detour, it will still be enjoyable.",
        stars = 3,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/WZc1tl0yxOvc1t5mzXebGQ/o.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewMarnie9 = Review(
        trailId = 17,
        userId = 2,
        review = "Cool ski area with exciting runs. The side with the greens is the only part designated for novices, and the remainder of the mountain isn't very welcoming to them. But there's a lot of wind, and several elevators are closed.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/usBuL4ltcIVSdkAdJE72sA/o.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    reviewMarnie10 = Review(
        trailId = 18,
        userId = 2,
        review = "When the weather is favorable, the mountain is nice, but the ski rental and customer service facilities are awful. To rent skis, I waited almost two hours. The crew appears distant and was undoubtedly enjoying themselves. It seemed like the DMV because you have to take a number and wait in a long queue.",
        stars = 2,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/2-meqoylLHUj72tb3rhpyA/o.jpg",
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
   
    #BOBBIE OWNS HEAVENLY
    reviewBobbie1 = Review(
        trailId = 1,
        userId = 3,
        review = "This is the first resort where I actually tried boarding and fell in love with it, plus the rates are very inexpensive in comparison to those at other resorts in the vicinity.",
        stars = 5,
        reviewImg = "https://www.athletesinsight.com/wp-content/uploads/2018/02/DSC01031-2-1024x683.jpg",
        createdAt = date(2022, 9, 28),
        updatedAt = date.today()
    )
    reviewBobbie2 = Review(
        trailId = 2,
        userId = 3,
        review = "The best deal is definitely boreal. Although it isn't the most attractive snowboarding or skiing resort, it has traditionally been the most affordable and accessible to the Bay Area. Compared to some of the others, it is smaller. Just off the highway, you can see the entire mountain and everything it has to offer.",
        stars = 4,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Boreal_Mountain_Resort_-_panoramio.jpg/1200px-Boreal_Mountain_Resort_-_panoramio.jpg",
        createdAt = date(2022, 8, 10),
        updatedAt = date.today()
    )
    reviewBobbie3 = Review(
        trailId = 3,
        userId = 3,
        review = "The best deal is definitely boreal. Although it isn't the most attractive snowboarding or skiing resort, it has traditionally been the most affordable and accessible to the Bay Area. Compared to some of the others, it is smaller. Just off the highway, you can see the entire mountain and everything it has to offer.",
        stars = 2,
        reviewImg = "https://www.athletesinsight.com/wp-content/uploads/2018/02/DSC01027-2-1024x683.jpg",
        createdAt = date(2022, 7, 17),
        updatedAt = date.today()
    )
    reviewBobbie4 = Review(
        trailId = 4,
        userId = 3,
        review = "The best deal is definitely boreal. Although it isn't the most attractive snowboarding or skiing resort, it has traditionally been the most affordable and accessible to the Bay Area. Compared to some of the others, it is smaller. Just off the highway, you can see the entire mountain and everything it has to offer.",
        stars = 4,
        reviewImg = "https://d6qyz3em3b312.cloudfront.net/upload/images/media/2012/01/10/5470668716_572860471a_b.2048x1024.jpg",
        createdAt = date(2022, 8, 11),
        updatedAt = date.today()
    )
    reviewBobbie5 = Review(
        trailId = 5,
        userId = 3,
        review = "The best deal is, in fact, boreal. Despite not being the most attractive snowboarding or skiing resort, this one has always been the most affordable and convenient to the Bay Area. Compared to other ones, it is smaller. Just off the highway, the entire mountain and all of its features are visible.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/VcLrnqaUSpeGH35ry4sSXw/o.jpg",
        createdAt = date(2022, 2, 3),
        updatedAt = date.today()
    )
    reviewBobbie6 = Review(
        trailId = 6,
        userId = 3,
        review = "The best deal is, in fact, boreal. Despite not being the most attractive snowboarding or skiing resort, this one has always been the most affordable and convenient to the Bay Area. Compared to other ones, it is smaller. Just off the highway, the entire mountain and all of its features are visible.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/uM9jucwJH6SfhVr-_6di9Q/o.jpg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )
    reviewBobbie7 = Review(
        trailId = 7,
        userId = 3,
        review = "The best deal is, in fact, boreal. Despite not being the most attractive snowboarding or skiing resort, this one has always been the most affordable and convenient to the Bay Area. Compared to other ones, it is smaller. Just off the highway, the entire mountain and all of its features are visible.",
        stars = 4,
        reviewImg = "https://fox40.com/wp-content/uploads/sites/13/2021/10/boreal.jpg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )
    reviewBobbie8 = Review(
        trailId = 8,
        userId = 3,
        review = "Definitely the best deal is boreal. Although not the most attractive snowboarding and skiing resort, this one has always been the most affordable and convenient to the Bay Area. More compact than some of the others. Just off the highway, the entire mountain and everything it has to offer are visible.",
        stars = 5,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/8BjsoIFWF25Ve7ov_Dl2tg/o.jpg",
        createdAt = date(2022, 6, 24),
        updatedAt = date.today()
    )
    reviewBobbie9 = Review(
        trailId = 9,
        userId = 3,
        review = "Definitely the best deal is boreal. Although not the most attractive snowboarding and skiing resort, this one has always been the most affordable and convenient to the Bay Area. More compact than some of the others. Just off the highway, the entire mountain and everything it has to offer are visible.",
        stars = 4,
        reviewImg = "https://cdn.sierrasun.com/wp-content/uploads/sites/4/2017/11/BorealOpener-SSU-111017-1.jpg",
        createdAt = date(2022, 6, 27),
        updatedAt = date.today()
    )
    reviewBobbie10 = Review(
        trailId = 10,
        userId = 3,
        review = "Definitely the best deal is boreal. Although not the most attractive snowboarding and skiing resort, this one has always been the most affordable and convenient to the Bay Area. More compact than some of the others. Just off the highway, the entire mountain and everything it has to offer are visible.",
        stars = 5,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/getting-to-boreal.jpg",
        createdAt = date(2022, 3, 28),
        updatedAt = date.today()
    )
    # reviewJeff = Review(
    #     trailId = 21,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 22,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 23,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 24,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 25,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 26,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 27,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 28,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 29,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewJeff = Review(
    #     trailId = 30,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )


     # reviewted = Review(
    #     trailId = 26,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 27,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 28,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 29,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 30,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 1,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 2,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 3,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 4,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewted = Review(
    #     trailId = 5,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )

     # reviewhope = Review(
    #     trailId = 6,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewhope = Review(
    #     trailId = 7,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewhope = Review(
    #     trailId = 8,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewhope = Review(
    #     trailId = 9,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # reviewhope = Review(
    #     trailId = 10,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewhope = Review(
    #     trailId = 11,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewhope = Review(
    #     trailId = 12,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewhope = Review(
    #     trailId = 13,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewhope = Review(
    #     trailId = 14,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewhope = Review(
    #     trailId = 15,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )



    # reviewpeter = Review(
    #     trailId = 16,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 17,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 18,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 19,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 20,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 21,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 22,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 23,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 24,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewpeter = Review(
    #     trailId = 25,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )


    # reviewron = Review(
    #     trailId = 26,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 27,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 28,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 29,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 30,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 1,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 2,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 3,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 4,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 5,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )



    # reviewcorey = Review(
    #     trailId = 6,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 7,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 8,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 9,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 10,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 11,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 12,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 13,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 14,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
    # reviewron = Review(
    #     trailId = 15,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )



    # revieweddy = Review(
    #     trailId = 16,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 17,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 18,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 19,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 20,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 21,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 22,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 23,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 24,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )
     # revieweddy = Review(
    #     trailId = 25,
    #     userId = "",
    #     review = "",
    #     stars = "",
    #     reviewImg = ""
    # )

    db.session.add(reviewDemo1)
    db.session.add(reviewDemo2)
    db.session.add(reviewMarnie1)
    db.session.add(reviewMarnie2)
    db.session.add(reviewMarnie3)
    db.session.add(reviewMarnie4)
    db.session.add(reviewMarnie5)
    db.session.add(reviewMarnie6)
    db.session.add(reviewMarnie7)
    db.session.add(reviewMarnie8)
    db.session.add(reviewMarnie9)
    db.session.add(reviewMarnie10)
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