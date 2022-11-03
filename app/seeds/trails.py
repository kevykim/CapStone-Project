from app.models import db, Trail
from datetime import date

def seed_trails():
    # BOREAL TAHOE
    boreal1 = Trail(
        name = "Ponderosa",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 0.7, 
        elevation = 7701,
        routeType = "All-mountain",
        previewImg = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/9c/d7/new-year-s-eve-skiing.jpg?w=1200&h=-1&s=1",
        userId = 1,
        createdAt = date(2022, 5, 3),
        updatedAt = date.today()
    )
    boreal2 = Trail(
        name = "Tamarack",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 0.4, 
        elevation = 7000,
        routeType = "Powder",
        previewImg = "https://d3ne5s9fv9p81l.cloudfront.net/public/wt/ac/58/20191219070340113759839.jpg?imageView2/2/format/auto",
        userId = 1,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    boreal3 = Trail(
        name = "Sunrise Blvd",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 2.5, 
        elevation = 7000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/950740/pexels-photo-950740.jpeg",
        userId = 2,
        createdAt = date(2022, 4, 15),
        updatedAt = date.today()
    )
    boreal4 = Trail(
        name = "Mariposa",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 1.5, 
        elevation = 5500,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/880497/pexels-photo-880497.jpeg",
        userId = 2,
        createdAt = date(2022, 6, 3),
        updatedAt = date.today()
    )
    boreal5 = Trail(
        name = "Juniper",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest ski and snowboard resort to Sacramento and the San Francisco Bay Area is Boreal, which is perched high atop Donner Pass. Even though Boreal is one of the most compact ski and snowboard resorts in Lake Tahoe, it is nevertheless very accessible, welcoming to families, offers night skiing, and boasts fantastic terrain parks.",
        length = 0.8, 
        elevation = 6500,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg",
        userId = 2,
        createdAt = date(2022, 8, 11),
        updatedAt = date.today()
    )
    boreal6 = Trail(
        name = "Kiss A Bear",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "The nearest ski and snowboard resort to Sacramento and the San Francisco Bay Area is Boreal, which is perched high atop Donner Pass. Even though Boreal is one of the most compact ski and snowboard resorts in Lake Tahoe, it is nevertheless very accessible, welcoming to families, offers night skiing, and boasts fantastic terrain parks.",
        length = 0.5, 
        elevation = 5000,
        routeType = "Park",
        previewImg = "https://images.pexels.com/photos/4580974/pexels-photo-4580974.jpeg",
        userId = 2,
        createdAt = date(2022, 9, 21),
        updatedAt = date.today()
    )
    boreal7 = Trail(
        name = "Prospector",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "Boreal ski and snowboard area is the nearest resort to Sacramento and the San Francisco Bay Area, and it is situated high up on the summit of Donner Pass. Despite being one of the most compact ski and snowboard resorts in Lake Tahoe, Boreal is still a terrific place for families, features great terrain parks, and is also easily accessible.",
        length = 0.8, 
        elevation = 6500,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/8404254/pexels-photo-8404254.jpeg",
        userId = 2,
        createdAt = date(2022, 8, 12),
        updatedAt = date.today()
    )
    boreal8 = Trail(
        name = "South 40",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "Boreal ski and snowboard area is the nearest resort to Sacramento and the San Francisco Bay Area, and it is situated high up on the summit of Donner Pass. Despite being one of the most compact ski and snowboard resorts in Lake Tahoe, Boreal is still a terrific place for families, features great terrain parks, and is also easily accessible.",
        length = 0.6, 
        elevation = 5000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/7987347/pexels-photo-7987347.jpeg",
        userId = 2,
        createdAt = date(2022, 10, 14),
        updatedAt = date.today()
    )
    boreal9 = Trail(
        name = "Chukker",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal ski and snowboard area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's smaller ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts fantastic terrain parks.",
        length = 0.4, 
        elevation = 7500,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/869263/pexels-photo-869263.jpeg",
        userId = 2,
        createdAt = date(2022, 7, 5),
        updatedAt = date.today()
    )
    boreal10 = Trail(
        name = "Klondike",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal ski and snowboard area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's smaller ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts fantastic terrain parks.",
        length = 1, 
        elevation = 7000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/68398/pexels-photo-68398.jpeg",
        userId = 2,
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    # HEAVENLY TAHOE
    heavenly1 = Trail(
        name = "Killerbrew Canyon",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Double Black Diamond",
        description = "With an amazing 4,800 skiable acres, Heavenly Ski and Snowboard Resort is the largest resort in Lake Tahoe. Skiers and snowboarders can travel between the states of California and Nevada in this region, which is located south of Lake Tahoe. Heavenly, which is located just outside of South Lake Tahoe, makes a fantastic basecamp for longer Lake Tahoe ski and snowboard trips.",
        length = 0.7, 
        elevation = 9000,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/3600569/pexels-photo-3600569.jpeg",
        userId = 3,
        createdAt = date(2022, 6, 12),
        updatedAt = date.today()
    )
    heavenly2 = Trail(
        name = "Milky Way Bowl",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Black Diamond",
        description = "With an amazing 4,800 skiable acres, Heavenly Ski and Snowboard Resort is the largest resort in Lake Tahoe. Skiers and snowboarders can travel between the states of California and Nevada in this region, which is located south of Lake Tahoe. Heavenly, which is located just outside of South Lake Tahoe, makes a fantastic basecamp for longer Lake Tahoe ski and snowboard trips.",
        length = 1.5, 
        elevation = 9500,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/352092/pexels-photo-352092.jpeg",
        userId = 3,
        createdAt = date(2022, 1, 16),
        updatedAt = date.today()
    )
    heavenly3 = Trail(
        name = "Ridge Run",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Intermediate",
        description = "With an amazing 4,800 skiable acres, Heavenly Ski and Snowboard Resort is the largest resort in Lake Tahoe. Skiers and snowboarders can travel between the states of California and Nevada in this region, which is located south of Lake Tahoe. Heavenly, which is located just outside of South Lake Tahoe, makes a fantastic basecamp for longer Lake Tahoe ski and snowboard trips.",
        length = 2.0, 
        elevation = 10000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg",
        userId = 3,
        createdAt = date(2022, 2, 3),
        updatedAt = date.today()
    )
    heavenly4 = Trail(
        name = "The Face",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Double Black Diamond",
        description = "With a staggering 4,800 skiable acres, Heavenly Ski & Snowboard Resort is Lake Tahoe's largest resort. South of Lake Tahoe, the region sits on the border between California and Nevada, allowing skiers and snowboarders to travel between the two states. Heavenly, located in South Lake Tahoe, makes an excellent starting point for extended Lake Tahoe ski and snowboard trips.",
        length = 0.5, 
        elevation = 7000,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/6721021/pexels-photo-6721021.jpeg",
        userId = 3,
        createdAt = date(2022, 3, 8),
        updatedAt = date.today()
    )
    heavenly5 = Trail(
        name = "East Bowl",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Double Black Diamond",
        description = "With an amazing 4,800 acres of skiable land, Heavenly Ski and Snowboard Resort is Lake Tahoe's largest resort. Skiers and snowboarders can pass from one state to another in this region, which sits on the border between California and Nevada south of Lake Tahoe. A great basecamp for longer Lake Tahoe ski and snowboard trips is Heavenly, which is located just outside of the town of South Lake Tahoe.",
        length = 0.5, 
        elevation = 6000,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/14177842/pexels-photo-14177842.jpeg",
        userId = 3,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth1 = Trail(
        name = "Snake Run",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Intermediate",
        description = "Mammoth is known as one of California's top resorts for skiing and snowboarding. The ski area is enormous, with a 3,100' vertical drop to match, as the name would imply. There is a staggering variety of terrain for skiers and snowboarders of all skill levels spread throughout the 3,500 skiable acres.",
        length = 1.1, 
        elevation = 6000,
        routeType = "Park",
        previewImg = "https://images.pexels.com/photos/1027365/pexels-photo-1027365.jpeg",
        userId = 4,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth2 = Trail(
        name = "Jibs & More",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Intermediate",
        description = "Mammoth is known as one of California's top resorts for skiing and snowboarding. The ski area is enormous, with a 3,100' vertical drop to match, as the name would imply. There is a staggering variety of terrain for skiers and snowboarders of all skill levels spread throughout the 3,500 skiable acres.",
        length = 0.5, 
        elevation = 5000,
        routeType = "Park",
        previewImg = "https://images.pexels.com/photos/8532486/pexels-photo-8532486.jpeg",
        userId = 4,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth3 = Trail(
        name = "Sesame Street",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Beginner",
        description = "One of California's top resort towns for skiing and snowboarding is Mammoth. With a 3,100' vertical drop, the ski area is as large as its name would imply. An incredible variety of terrain is available for skiers and snowboarders of all skill levels, spread out throughout the 3,500 skiable acres.",
        length = 0.7, 
        elevation = 4500,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/1125078/pexels-photo-1125078.jpeg",
        userId = 4, 
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth4 = Trail(
        name = "Hangman's Hollow",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Double Black Diamond",
        description = "One of California's top resorts for skiing and snowboarding is Mammoth, according to many. The ski area, which has a 3,100' vertical drop, is enormous, as its name would imply. Amazing variety of terrain for skiers and snowboarders of all skill levels is spread out throughout the 3,500 skiable acres.",
        length = 1.2, 
        elevation = 9500,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/566885/pexels-photo-566885.jpeg",
        userId = 4,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth5 = Trail(
        name = "Monument",
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Double Black Diamond",
        description = "One of California's top resorts for skiing and snowboarding is Mammoth. With a 3,100' vertical drop, the ski area is as big as its name would imply. There is an incredible variety of terrain for skiers and snowboarders of all skill levels spread across the 3,500 skiable acres.",
        length = 2.0, 
        elevation = 10000,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/745974/pexels-photo-745974.jpeg",
        userId = 4,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear1 = Trail(
        name = "Central Park",
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Intermediate",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.1, 
        elevation = 7000,
        routeType = "Freeride",
        previewImg = "https://www.bigbear.com/imager/s3_us-west-1_amazonaws_com/big-bear/images/old-site-images/Winter-Activities_bc0d2157d501d4729a3d5631708a6b2e.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear2 = Trail(
        name = "Easy Street",
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Beginner",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.5, 
        elevation = 8000,
        routeType = "Freeride",
        previewImg = "https://www.bigbear.com/imager/files_idss_com/C347/9805d1cb-5037-45d6-a8c4-da836fa31ad0_cf127ca3a98712e9d52213b1386347a9.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear3 = Trail(
        name = "Amusement Park",
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Beginner",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.2, 
        elevation = 7000,
        routeType = "Park",
        previewImg = "https://static.evo.com/content/travel-guides/ca/bigbear/bmjoesexton-1.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear4 = Trail(
        name = "Express Way",
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Intermediate",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.4, 
        elevation = 7100,
        routeType = "Freeride",
        previewImg = "https://www.destinationbigbear.com/blog/wp-content/uploads/2015/02/trouble-on-the-slopes.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear5 = Trail(
        name = "Inspiration",
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Beginner",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 0.7, 
        elevation = 6000,
        routeType = "Freeride",
        previewImg = "https://snowbrains.com/wp-content/uploads/2022/03/SCR-20220323-l41.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh1 = Trail(
        name = "Vertigo",
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Double Black Diamond",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 0.6, 
        elevation = 8000,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/68398/pexels-photo-68398.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh2 = Trail(
        name = "Silverspur",
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Intermediate",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 0.9, 
        elevation = 8000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/3988028/pexels-photo-3988028.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh3 = Trail(
        name = "Conquest",
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Intermediate",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 1.1, 
        elevation = 7900,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/105784/pexels-photo-105784.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh4 = Trail(
        name = "Sunnyside",
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Beginner",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 1.3, 
        elevation = 8000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/1603252/pexels-photo-1603252.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh5 = Trail(
        name = "Cruiser",
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Beginner",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 0.8, 
        elevation = 8100,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/806213/pexels-photo-806213.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )

    
    db.session.add(boreal1)
    db.session.add(boreal2)
    db.session.add(boreal3)
    db.session.add(boreal4)
    db.session.add(boreal5)
    db.session.add(boreal6)
    db.session.add(boreal7)
    db.session.add(boreal8)
    db.session.add(boreal9)
    db.session.add(boreal10)
    db.session.add(heavenly1)
    db.session.add(heavenly2)
    db.session.add(heavenly3)
    db.session.add(heavenly4)
    db.session.add(heavenly5)
    db.session.add(mammoth1)
    db.session.add(mammoth2)
    db.session.add(mammoth3)
    db.session.add(mammoth4)
    db.session.add(mammoth5)
    db.session.add(bear1)
    db.session.add(bear2)
    db.session.add(bear3)
    db.session.add(bear4)
    db.session.add(bear5)
    db.session.add(mthigh1)
    db.session.add(mthigh2)
    db.session.add(mthigh3)
    db.session.add(mthigh4)
    db.session.add(mthigh5)









    db.session.commit()

def undo_trails():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
  