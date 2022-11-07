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
        reviewImg = "https://images.pexels.com/photos/7969331/pexels-photo-7969331.jpeg",
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



    reviewJeff1 = Review(
        trailId = 21,
        userId = 4,
        review = "Riding on Bear Mountain is fine. In essence, it is a sizable terrain park. It has a large capacity. The lifts move quickly. The employees seem fine. The mountain has excellent grooming. The day was enjoyable.",
        stars = 2,
        reviewImg = "https://snowboardmag.com/wp-content/uploads/2014/11/bear-mountain-snow-summit-opening-day.jpg",
        createdAt = date(2022, 4, 28),
        updatedAt = date.today()
    )
    reviewJeff2 = Review(
        trailId = 22,
        userId = 4,
        review = "It's okay to ride in Bear Mountain. Basically, it is a large terrain park. Many people can fit inside. There are quick lifts. Staff members appear to be in good shape. The mountain is really well maintained. The day was pleasant.",
        stars = 3,
        reviewImg = "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/2a/5f/63.jpg",
        createdAt = date(2022, 3, 25),
        updatedAt = date.today()
    )
    reviewJeff3 = Review(
        trailId = 23,
        userId = 4,
        review = "Riding on Bear Mountain is acceptable. A large terrain park is essentially what it is. Many people fit inside of it. Fast lifts are available. The personnel appears to be in good shape. The mountain is really well-kept. We enjoyed our day.",
        stars = 4,
        reviewImg = "https://offloadmedia.feverup.com/secretlosangeles.com/wp-content/uploads/2021/01/23204050/133589607_883949509034939_190740308602357817_n-1024x682.jpg",
        createdAt = date(2022, 5, 28),
        updatedAt = date.today()
    )
    reviewJeff4 = Review(
        trailId = 24,
        userId = 4,
        review = "Riding in Bear Mountain is acceptable. Essentially, it is a huge terrain park. It has a large capacity for people. The elevators go quickly. The employees appear to be in good shape. The mountain has been meticulously maintained. It was a good day.",
        stars = 5,
        reviewImg = "http://www.specialcarstore.com/sites/default/files/DSC09430.1080.jpg",
        createdAt = date(2022, 6, 28),
        updatedAt = date.today()
    )
    reviewJeff5 = Review(
        trailId = 25,
        userId = 4,
        review = "Riding on Bear Mountain is fine. In essence, it is a sizable terrain park. It has a large capacity. The lifts move quickly. The employees seem fine. The mountain has excellent grooming. The day was enjoyable.",
        stars = 4,
        reviewImg = "https://psia-w.org/new/wp-content/uploads/2017/03/IMG_5805.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )
    reviewJeff6 = Review(
        trailId = 26,
        userId = 4,
        review = "Great ski resort two hours from Los Angeles. This location is suitable for day trips. On long weekends and holidays, traffic can become quite congested, so make sure to prepare properly. Since most of the driving is on highways, you often won't require snow chains, but you can monitor their Twitter account.",
        stars = 4,
        reviewImg = "https://www.tripsavvy.com/thmb/a16PhyBgUXDF18RzL3zZQdfJ9dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MountainHighFlickrGrahamCC2-0-56a3e74c5f9b58b7d0d45fd7-59c2987a0d327a001146e3e0.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )
    reviewJeff7 = Review(
        trailId = 27,
        userId = 4,
        review = "Excellent ski area two hours from Los Angeles. A day trip to this location is recommended. Be aware that on long weekends and holidays, traffic might become quite congested. As it's largely highway travel, you won't typically require snow chains, but you can monitor their Twitter feed.",
        stars = 5,
        reviewImg = "https://www.wikihow.com/images_en/thumb/9/94/Snowboard-Step-15-preview.jpg/550px-Snowboard-Step-15-preview.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )
    reviewJeff8 = Review(
        trailId = 28,
        userId = 4,
        review = "A good area to ski/snowboard. Just their parking, I detest it. The parking area was already full when we arrived early, about 8 a.m., so we had to park in another lot a mile away.",
        stars = 2,
        reviewImg = "https://uploads.tapatalk-cdn.com/20170113/b60f52add2db4aa9bcbb33ede8454b63.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )
    reviewJeff9 = Review(
        trailId = 29,
        userId = 4,
        review = "Decent place to snowboard and ski. I simply detest their parking. We arrived to the hotel early, about 8 a.m., and the parking lot was already full; we were forced to park a mile away.",
        stars = 3,
        reviewImg = "https://www.snocountry.com/images/easyblog_articles/3808/b2ap3_thumbnail_Mt-High-Terrain.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )
    reviewJeff10 = Review(
        trailId = 30,
        userId = 4,
        review = "The weekdays are the best days to visit this location if you're a novice or trying to learn how to snowboard. Coming here on Friday was such a blast, though I'm not sure how packed it is on the weekend.",
        stars = 5,
        reviewImg = "https://media.defense.gov/2010/Jan/29/212296/-1/-1/0/100129-M-3459B-003.jpg",
        createdAt = date(2022, 3, 21),
        updatedAt = date.today()
    )


    reviewted1 = Review(
        trailId = 26,
        userId = 5,
        review = "Without needing to spend the night, this is a perfect location to enjoy a day of skiing from LA or SD. Because there isn't much to do in Wrightwood, where the resort is located, visitors only stop by for the day (in and out), which is ideal for traffic.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/08Ksa114xzFkPUJ_RS20lQ/o.jpg",
        createdAt = date(2022, 5, 21),
        updatedAt = date.today()
    )
    reviewted2 = Review(
        trailId = 27,
        userId = 5,
        review = "From LA or SD, you may easily get to this location for a day of skiing without needing to spend the night. It's fantastic for traffic because there isn't much to do in Wrightwood, where the resort is located, so visitors just come for the day (in and out).",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/08Ksa114xzFkPUJ_RS20lQ/o.jpg",
        createdAt = date(2022, 5, 21),
        updatedAt = date.today()
    )
    reviewted3 = Review(
        trailId = 28,
        userId = 5,
        review = "The top of a mountain is an excellent place to begin learning to ski or snowboard. I used to travel to this mountain to practice snowboarding because I used to reside in the high desert. Because it's so secluded and not many people know about it, I adore this location. It's a fantastic place to begin.",
        stars = 5,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/08Ksa114xzFkPUJ_RS20lQ/o.jpg",
        createdAt = date(2022, 5, 21),
        updatedAt = date.today()
    )
    reviewted4 = Review(
        trailId = 29,
        userId = 5,
        review = "Learning to ski or snowboard on a mountaintop is a terrific location to start. I used to visit this peak to practice snowboarding as I formerly lived in the high desert. I adore this location because it's a little hidden and not many people know about it. It's an excellent place to begin.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/08Ksa114xzFkPUJ_RS20lQ/o.jpg",
        createdAt = date(2022, 5, 21),
        updatedAt = date.today()
    )
    reviewted5 = Review(
        trailId = 30,
        userId = 5,
        review = "The best place to ski in Los Angeles is Mountain High. My first skiing experience was here. I believe that a family or group of friends would love this location.",
        stars = 4,
        reviewImg = "https://s3-media0.fl.yelpcdn.com/bphoto/08Ksa114xzFkPUJ_RS20lQ/o.jpg",
        createdAt = date(2022, 5, 21),
        updatedAt = date.today()
    )
    reviewted6 = Review(
        trailId = 1,
        userId = 5,
        review = "Excellent service, delicious cuisine that is prepared freshly, and the perfect location for beginners.",
        stars = 4,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/1/17/BorealSkiCA.jpg",
        createdAt = date(2022, 12, 21),
        updatedAt = date.today()
    )
    reviewted7 = Review(
        trailId = 2,
        userId = 5,
        review = "The finest place for beginners, with great food that is prepared freshly and wonderful service.",
        stars = 3,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/1/17/BorealSkiCA.jpg",
        createdAt = date(2022, 12, 21),
        updatedAt = date.today()
    )
    reviewted8 = Review(
        trailId = 3,
        userId = 5,
        review = "The finest spot for beginners, great cuisine (made freshly), amazing service.",
        stars = 2,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/1/17/BorealSkiCA.jpg",
        createdAt = date(2022, 12, 21),
        updatedAt = date.today()
    )
    reviewted9 = Review(
        trailId = 4,
        userId = 5,
        review = "Excellent service, delicious meal that is prepared right away, and the perfect location for beginners.",
        stars = 2,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/1/17/BorealSkiCA.jpg",
        createdAt = date(2022, 12, 21),
        updatedAt = date.today()
    )
    reviewted10 = Review(
        trailId = 5,
        userId = 5,
        review = "Excellent service, delicious cuisine that is prepared freshly, and the perfect location for beginners.",
        stars = 3,
        reviewImg = "https://upload.wikimedia.org/wikipedia/commons/1/17/BorealSkiCA.jpg",
        createdAt = date(2022, 12, 21),
        updatedAt = date.today()
    )



    reviewhope1 = Review(
        trailId = 6,
        userId = 6,
        review = "First time there, wonderful spot for beginners and all kinds of riders, especially for park snowboarding/skiing. The trails are extremely easy to traverse, and the staff is really friendly and respectful. The prices of the food are reasonable, and there is a good range of beer and mixed beverages.",
        stars = 5,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 11, 10),
        updatedAt = date.today()
    )
    reviewhope2 = Review(
        trailId = 7,
        userId = 6,
        review = "Trails are really easy to follow and staff are extremely nice and respectful.",
        stars = 4,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 11, 10),
        updatedAt = date.today()
    )
    reviewhope3 = Review(
        trailId = 8,
        userId = 6,
        review = "First time there, wonderful spot for beginners and all kinds of riders, especially for Park Snowboarding/Skiing. Trails are really easy to follow and personnel are extremely nice and respectful. Food prices are reasonable and there is a good range of Beer and Mixed drinks.",
        stars = 3,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 11, 10),
        updatedAt = date.today()
    )
    reviewhope4 = Review(
        trailId = 9,
        userId = 6,
        review = "First time there, wonderful spot for beginners and all kinds of riders, especially for Park Snowboarding/Skiing. Trails are really easy to follow and personnel are extremely nice and respectful. Food prices are reasonable and there is a good range of Beer and Mixed drinks.",
        stars = 4,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 11, 10),
        updatedAt = date.today()
    )
    reviewhope5 = Review(
        trailId = 10,
        userId = 6,
        review = "First time there, wonderful spot for beginners and all kinds of riders, especially for Park Snowboarding/Skiing. Trails are really easy to follow and personnel are extremely nice and respectful. Food prices are reasonable and there is a good range of Beer and Mixed drinks.",
        stars = 4,
        reviewImg = "https://whitebookski.com/wp-content/uploads/2017/04/shred-2.jpg",
        createdAt = date(2022, 11, 10),
        updatedAt = date.today()
    )
    reviewhope6 = Review(
        trailId = 11,
        userId = 6,
        review = "Amazing mountain view and slopes condition was pretty good. There are many choices of slopes between the level of beginner to expert. It was a shame that they closed at 4pm though",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/11455625/pexels-photo-11455625.jpeg",
        createdAt = date(2022, 1, 10),
        updatedAt = date.today()
    )
    reviewhope7 = Review(
        trailId = 12,
        userId = 6,
        review = "Amazing mountain view and slopes condition was pretty good. There are many choices of slopes between the level of beginner to expert. It was a shame that they closed at 4pm though",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/11455625/pexels-photo-11455625.jpeg",
        createdAt = date(2022, 1, 10),
        updatedAt = date.today()
    )
    reviewhope8 = Review(
        trailId = 13,
        userId = 6,
        review = "The slopes had a great mountain outlook and were in decent condition. Between basic and expert levels, there are numerous slope options. Unfortunately, they had a 4 p.m. closing time.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/11455625/pexels-photo-11455625.jpeg",
        createdAt = date(2022, 1, 10),
        updatedAt = date.today()
    )
    reviewhope9 = Review(
        trailId = 14,
        userId = 6,
        review = "The slopes had a great mountain outlook and were in decent condition. Between basic and expert levels, there are numerous slope options. Unfortunately, they had a 4 p.m. closing time.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/11455625/pexels-photo-11455625.jpeg",
        createdAt = date(2022, 1, 10),
        updatedAt = date.today()
    )
    reviewhope10 = Review(
        trailId = 15,
        userId = 6,
        review = "The slopes had a great mountain outlook and were in decent condition. Between basic and expert levels, there are numerous slope options. Unfortunately, they had a 4 p.m. closing time.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/11455625/pexels-photo-11455625.jpeg",
        createdAt = date(2022, 1, 10),
        updatedAt = date.today()
    )



    reviewpeter1 = Review(
        trailId = 16,
        userId = 7,
        review = "Good mountain with a variety of trails for hikers of all skill levels. It is always pleasant to hit the slopes on softer snow every day because many paths are groomed every evening.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/5672056/pexels-photo-5672056.jpeg",
        createdAt = date(2022, 2, 10),
        updatedAt = date.today()
    )
    reviewpeter2 = Review(
        trailId = 17,
        userId = 7,
        review = "Good mountain with a variety of trails for hikers of all skill levels. It is always pleasant to hit the slopes on softer snow every day because many paths are groomed every evening.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/5672056/pexels-photo-5672056.jpeg",
        createdAt = date(2022, 2, 10),
        updatedAt = date.today()
    )
    reviewpeter3 = Review(
        trailId = 18,
        userId = 7,
        review = "Good mountain with a wide range of trails for different skill levels. Since many trails are groomed every evening, it is always pleasant to hit the slopes on softer snow every day.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/5672056/pexels-photo-5672056.jpeg",
        createdAt = date(2022, 2, 10),
        updatedAt = date.today()
    )
    reviewpeter4 = Review(
        trailId = 19,
        userId = 7,
        review = "An excellent mountain with a wide variety of trails for hikers of all skill levels. Since many courses are groomed each night, it is always enjoyable to ski on softer snow each day.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/5672056/pexels-photo-5672056.jpeg",
        createdAt = date(2022, 2, 10),
        updatedAt = date.today()
    )
    reviewpeter5 = Review(
        trailId = 20,
        userId = 7,
        review = "An excellent mountain with a wide variety of trails for hikers of all skill levels. Since many courses are groomed each night, it is always enjoyable to ski on softer snow each day.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/5672056/pexels-photo-5672056.jpeg",
        createdAt = date(2022, 2, 10),
        updatedAt = date.today()
    )
    reviewpeter6 = Review(
        trailId = 21,
        userId = 7,
        review = "Had slopes for skiers of all abilities. had a slower lift that would halt if someone fell. You can bring your own snacks, and private classes are offered.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/5756705/pexels-photo-5756705.jpeg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )
    reviewpeter7 = Review(
        trailId = 22,
        userId = 7,
        review = "Had slopes for skiers of all abilities. had a slower lift that would halt if someone fell. You can bring your own snacks, and private classes are offered.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/5756705/pexels-photo-5756705.jpeg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )
    reviewpeter8 = Review(
        trailId = 23,
        userId = 7,
        review = "Had slopes for skiers of all abilities. had a slower lift that would halt if someone fell. You can bring your own snacks, and private classes are offered.",
        stars = 2,
        reviewImg = "https://images.pexels.com/photos/5756705/pexels-photo-5756705.jpeg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )
    reviewpeter9= Review(
        trailId = 24,
        userId = 7,
        review = "Insane snowboarding experience for a beginner. a realm of winter wonder. When visiting during the snowy season, be ready for a big line if you plan to rent equipment.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/5756705/pexels-photo-5756705.jpeg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )
    reviewpeter10 = Review(
        trailId = 25,
        userId = 7,
        review = "Insane snowboarding experience for a beginner. a realm of winter wonder. When visiting during the snowy season, be ready for a big line if you plan to rent equipment.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/5756705/pexels-photo-5756705.jpeg",
        createdAt = date(2022, 3, 14),
        updatedAt = date.today()
    )


    reviewron1 = Review(
        trailId = 26,
        userId = 8,
        review = "The lifts are easy to use, and the slopes are excellent. For budget and value, it is advisable to choose the lesson, rental, and lift package if it is your first trip. Go on a weekday night ride if you're on a tight budget; there are less people there and parking is free.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/6745522/pexels-photo-6745522.jpeg",
        createdAt = date(2022, 4, 14),
        updatedAt = date.today()
    )
    reviewron2 = Review(
        trailId = 27,
        userId = 8,
        review = "The lifts are easy to use, and the slopes are excellent. For budget and value, it is advisable to choose the lesson, rental, and lift package if it is your first trip. Go on a weekday night ride if you're on a tight budget; there are less people there and parking is free.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/6745522/pexels-photo-6745522.jpeg",
        createdAt = date(2022, 4, 14),
        updatedAt = date.today()
    )
    reviewron3 = Review(
        trailId = 28,
        userId = 8,
        review = "The slopes are excellent, and the lifts are easy to use. The lesson, rental, and lift package is the ideal option for beginners in terms of cost and value. Choose a weeknight ride if you're on a tight budget because there are less people there and parking is free.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/6745522/pexels-photo-6745522.jpeg",
        createdAt = date(2022, 4, 14),
        updatedAt = date.today()
    )
    reviewron4 = Review(
        trailId = 29,
        userId = 8,
        review = "The slopes are excellent, and the lifts are easy to use. The lesson, rental, and lift package is the ideal option for beginners in terms of cost and value. Choose a weeknight ride if you're on a tight budget because there are less people there and parking is free.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/6745522/pexels-photo-6745522.jpeg",
        createdAt = date(2022, 4, 14),
        updatedAt = date.today()
    )
    reviewron5 = Review(
        trailId = 30,
        userId = 8,
        review = "The slopes are excellent, and the lifts are easy to use. The lesson, rental, and lift package is the ideal option for beginners in terms of cost and value. Choose a weeknight ride if you're on a tight budget because there are less people there and parking is free.",
        stars = 2,
        reviewImg = "https://images.pexels.com/photos/6745522/pexels-photo-6745522.jpeg",
        createdAt = date(2022, 4, 14),
        updatedAt = date.today()
    )
    reviewron6 = Review(
        trailId = 1,
        userId = 8,
        review = "Conveniently located directly adjacent to Interstate 80. Key cards are used as lift tickets, which makes them very simple to use. could also be reloaded for further visits.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/11035053/pexels-photo-11035053.jpeg",
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    reviewron7 = Review(
        trailId = 2,
        userId = 8,
        review = "Conveniently located directly adjacent to Interstate 80. Key cards are used as lift tickets, which makes them very simple to use. could also be reloaded for further visits.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/11035053/pexels-photo-11035053.jpeg",
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    reviewron8 = Review(
        trailId = 3,
        userId = 8,
        review = "Conveniently located directly adjacent to Interstate 80. Key cards are used as lift tickets, which makes them very simple to use. could also be reloaded for further visits.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/11035053/pexels-photo-11035053.jpeg",
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    reviewron9 = Review(
        trailId = 4,
        userId = 8,
        review = "Conveniently located directly adjacent to Interstate 80. Key cards are used as lift tickets, which makes them very simple to use. could also be reloaded for further visits.",
        stars = 2,
        reviewImg = "https://images.pexels.com/photos/11035053/pexels-photo-11035053.jpeg",
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    reviewron10 = Review(
        trailId = 5,
        userId = 8,
        review = "Conveniently located directly adjacent to Interstate 80. Key cards are used as lift tickets, which makes them very simple to use. could also be reloaded for further visits.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/11035053/pexels-photo-11035053.jpeg",
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )



    reviewcorey1 = Review(
        trailId = 6,
        userId = 9,
        review = "Snowboarding and other winter sports are excellent here. Will come back next year!",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/4057964/pexels-photo-4057964.jpeg",
        createdAt = date(2022, 3, 15),
        updatedAt = date.today()
    )
    reviewcorey2 = Review(
        trailId = 7,
        userId = 9,
        review = "Snowboarding and other winter sports are excellent here. Will come back next year!",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/4057964/pexels-photo-4057964.jpeg",
        createdAt = date(2022, 3, 15),
        updatedAt = date.today()
    )
    reviewcorey3 = Review(
        trailId = 8,
        userId = 9,
        review = "Snowboarding and other winter sports are excellent here. Will come back next year!",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/4057964/pexels-photo-4057964.jpeg",
        createdAt = date(2022, 3, 15),
        updatedAt = date.today()
    )
    reviewcorey4 = Review(
        trailId = 9,
        userId = 9,
        review = "Snowboarding and other winter sports are excellent here. Will come back next year!",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/4057964/pexels-photo-4057964.jpeg",
        createdAt = date(2022, 3, 15),
        updatedAt = date.today()
    )
    reviewcorey5 = Review(
        trailId = 10,
        userId = 9,
        review = "Snowboarding and other winter sports are excellent here. Will come back next year!",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/4057964/pexels-photo-4057964.jpeg",
        createdAt = date(2022, 3, 15),
        updatedAt = date.today()
    )
    reviewcorey6 = Review(
        trailId = 11,
        userId = 9,
        review = "A modest resort with little elevation gain. The majority of the runs on the mountain's face are blue and black, and snowboarders are greatly favored. On all but one of the green runs, cross-country skiing was involved. The staff is incredibly welcoming and supportive.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/4067697/pexels-photo-4067697.jpeg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )
    reviewcorey7 = Review(
        trailId = 12,
        userId = 9,
        review = "A modest resort with little elevation gain. The majority of the runs on the mountain's face are blue and black, and snowboarders are greatly favored. On all but one of the green runs, cross-country skiing was involved. The staff is incredibly welcoming and supportive.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/4067697/pexels-photo-4067697.jpeg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )
    reviewcorey8 = Review(
        trailId = 13,
        userId = 9,
        review = "A modest resort with little elevation gain. The majority of the runs on the mountain's face are blue and black, and snowboarders are greatly favored. On all but one of the green runs, cross-country skiing was involved. The staff is incredibly welcoming and supportive.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/4067697/pexels-photo-4067697.jpeg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )
    reviewcorey9 = Review(
        trailId = 14,
        userId = 9,
        review = "A modest resort with little elevation gain. The majority of the runs on the mountain's face are blue and black, and snowboarders are greatly favored. On all but one of the green runs, cross-country skiing was involved. The staff is incredibly welcoming and supportive.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/4067697/pexels-photo-4067697.jpeg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )
    reviewcorey10 = Review(
        trailId = 15,
        userId = 9,
        review = "A modest resort with little elevation gain. The majority of the runs on the mountain's face are blue and black, and snowboarders are greatly favored. On all but one of the green runs, cross-country skiing was involved. The staff is incredibly welcoming and supportive.",
        stars = 5,
        reviewImg = "https://images.pexels.com/photos/4067697/pexels-photo-4067697.jpeg",
        createdAt = date(2022, 1, 15),
        updatedAt = date.today()
    )



    revieweddy1 = Review(
        trailId = 16,
        userId = 10,
        review = "It was a really lovely hike in Mammoth. All around you, you'll witness gorgeous mountains, lovely lakes, and lush forests. It's so much fun and natural to go skiing in the winter or hiking and bicycling in the summer.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/306001/pexels-photo-306001.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy2 = Review(
        trailId = 17,
        userId = 10,
        review = "It was a really lovely hike in Mammoth. All around you, you'll witness gorgeous mountains, lovely lakes, and lush forests. It's so much fun and natural to go skiing in the winter or hiking and bicycling in the summer.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/306001/pexels-photo-306001.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy3 = Review(
        trailId = 18,
        userId = 10,
        review = "It was a really lovely hike in Mammoth. All around you, you'll witness gorgeous mountains, lovely lakes, and lush forests. It's so much fun and natural to go skiing in the winter or hiking and bicycling in the summer.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/306001/pexels-photo-306001.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy4 = Review(
        trailId = 19,
        userId = 10,
        review = "It was a really lovely hike in Mammoth. All around you, you'll witness gorgeous mountains, lovely lakes, and lush forests. It's so much fun and natural to go skiing in the winter or hiking and bicycling in the summer.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/306001/pexels-photo-306001.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy5 = Review(
        trailId = 20,
        userId = 10,
        review = "It was a really lovely hike in Mammoth. All around you, you'll witness gorgeous mountains, lovely lakes, and lush forests. It's so much fun and natural to go skiing in the winter or hiking and bicycling in the summer.",
        stars = 4,
        reviewImg = "https://images.pexels.com/photos/306001/pexels-photo-306001.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy6 = Review(
        trailId = 21,
        userId = 10,
        review = "The popular resort among locals in southern California. there are some wonderful days, but the snow is primarily artificial.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/1815450/pexels-photo-1815450.jpeg",
        createdAt = date(2022, 12, 25),
        updatedAt = date.today()
    )
    revieweddy7 = Review(
        trailId = 22,
        userId = 10,
        review = "The popular resort among locals in southern California. there are some wonderful days, but the snow is primarily artificial.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/1815450/pexels-photo-1815450.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy8 = Review(
        trailId = 23,
        userId = 10,
        review = "The popular resort among locals in southern California. there are some wonderful days, but the snow is primarily artificial.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/1815450/pexels-photo-1815450.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy9 = Review(
        trailId = 24,
        userId = 10,
        review = "The popular resort among locals in southern California. there are some wonderful days, but the snow is primarily artificial.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/1815450/pexels-photo-1815450.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )
    revieweddy10 = Review(
        trailId = 25,
        userId = 10,
        review = "The popular resort among locals in southern California. there are some wonderful days, but the snow is primarily artificial.",
        stars = 3,
        reviewImg = "https://images.pexels.com/photos/1815450/pexels-photo-1815450.jpeg",
        createdAt = date(2022, 1, 25),
        updatedAt = date.today()
    )

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
    db.session.add(reviewJeff1)
    db.session.add(reviewJeff2)
    db.session.add(reviewJeff3)
    db.session.add(reviewJeff4)
    db.session.add(reviewJeff5)
    db.session.add(reviewJeff6)
    db.session.add(reviewJeff7)
    db.session.add(reviewJeff8)
    db.session.add(reviewJeff9)
    db.session.add(reviewJeff10)
    db.session.add(reviewted1)
    db.session.add(reviewted2)
    db.session.add(reviewted3)
    db.session.add(reviewted4)
    db.session.add(reviewted5)
    db.session.add(reviewted6)
    db.session.add(reviewted7)
    db.session.add(reviewted8)
    db.session.add(reviewted9)
    db.session.add(reviewted10)
    db.session.add(reviewhope1)
    db.session.add(reviewhope2)
    db.session.add(reviewhope3)
    db.session.add(reviewhope4)
    db.session.add(reviewhope5)
    db.session.add(reviewhope6)
    db.session.add(reviewhope7)
    db.session.add(reviewhope8)
    db.session.add(reviewhope9)
    db.session.add(reviewhope10)
    db.session.add(reviewpeter1)
    db.session.add(reviewpeter2)
    db.session.add(reviewpeter3)
    db.session.add(reviewpeter4)
    db.session.add(reviewpeter5)
    db.session.add(reviewpeter6)
    db.session.add(reviewpeter7)
    db.session.add(reviewpeter8)
    db.session.add(reviewpeter9)
    db.session.add(reviewpeter10)
    db.session.add(reviewron1)
    db.session.add(reviewron2)
    db.session.add(reviewron3)
    db.session.add(reviewron4)
    db.session.add(reviewron5)
    db.session.add(reviewron6)
    db.session.add(reviewron7)
    db.session.add(reviewron8)
    db.session.add(reviewron9)
    db.session.add(reviewron10)
    db.session.add(reviewcorey1)
    db.session.add(reviewcorey2)
    db.session.add(reviewcorey3)
    db.session.add(reviewcorey4)
    db.session.add(reviewcorey5)
    db.session.add(reviewcorey6)
    db.session.add(reviewcorey7)
    db.session.add(reviewcorey8)
    db.session.add(reviewcorey9)
    db.session.add(reviewcorey10)
    db.session.add(revieweddy1)
    db.session.add(revieweddy2)
    db.session.add(revieweddy3)
    db.session.add(revieweddy4)
    db.session.add(revieweddy5)
    db.session.add(revieweddy6)
    db.session.add(revieweddy7)
    db.session.add(revieweddy8)
    db.session.add(revieweddy9)
    db.session.add(revieweddy10)







    

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()