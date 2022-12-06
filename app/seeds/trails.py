from app.models import db, Trail
from datetime import date

def seed_trails():
    # BOREAL TAHOE
    boreal1 = Trail(
        name = "Ponderosa",
        city = 'Soda Springs',
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
        city = 'Soda Springs',
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
        city = 'Soda Springs',
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 2.5, 
        elevation = 7000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/950740/pexels-photo-950740.jpeg",
        userId = 2,
        createdAt = date(2022, 4, 15),
        updatedAt = date.today()
    )
    boreal4 = Trail(
        name = "Mariposa",
        city = 'Soda Springs',
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal Ski and Snowboard Area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's lesser ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts excellent terrain parks.",
        length = 1.5, 
        elevation = 5500,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/880497/pexels-photo-880497.jpeg",
        userId = 2,
        createdAt = date(2022, 6, 3),
        updatedAt = date.today()
    )
    boreal5 = Trail(
        name = "Juniper",
        city = 'Soda Springs',
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
        city = 'Soda Springs',
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
        city = 'Soda Springs',
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "Boreal ski and snowboard area is the nearest resort to Sacramento and the San Francisco Bay Area, and it is situated high up on the summit of Donner Pass. Despite being one of the most compact ski and snowboard resorts in Lake Tahoe, Boreal is still a terrific place for families, features great terrain parks, and is also easily accessible.",
        length = 0.8, 
        elevation = 6500,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/8404254/pexels-photo-8404254.jpeg",
        userId = 2,
        createdAt = date(2022, 8, 12),
        updatedAt = date.today()
    )
    boreal8 = Trail(
        name = "South 40",
        city = 'Soda Springs',
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "Boreal ski and snowboard area is the nearest resort to Sacramento and the San Francisco Bay Area, and it is situated high up on the summit of Donner Pass. Despite being one of the most compact ski and snowboard resorts in Lake Tahoe, Boreal is still a terrific place for families, features great terrain parks, and is also easily accessible.",
        length = 0.6, 
        elevation = 5000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/7987347/pexels-photo-7987347.jpeg",
        userId = 2,
        createdAt = date(2022, 10, 14),
        updatedAt = date.today()
    )
    boreal9 = Trail(
        name = "Chukker",
        city = 'Soda Springs',
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
        city = 'Soda Springs',
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "The nearest resort to Sacramento and the San Francisco Bay Area is Boreal ski and snowboard area, which is perched high atop Donner Pass. Although Boreal is one of Lake Tahoe's smaller ski and snowboard resorts, it is nonetheless very convenient, welcoming to families, offers night skiing, and boasts fantastic terrain parks.",
        length = 1, 
        elevation = 7000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/68398/pexels-photo-68398.jpeg",
        userId = 2,
        createdAt = date(2022, 2, 25),
        updatedAt = date.today()
    )
    # HEAVENLY TAHOE
    heavenly1 = Trail(
        name = "Killerbrew Canyon",
        city = 'South Lake Tahoe',
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
        city = 'South Lake Tahoe',
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
        city = 'South Lake Tahoe',
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Intermediate",
        description = "With an amazing 4,800 skiable acres, Heavenly Ski and Snowboard Resort is the largest resort in Lake Tahoe. Skiers and snowboarders can travel between the states of California and Nevada in this region, which is located south of Lake Tahoe. Heavenly, which is located just outside of South Lake Tahoe, makes a fantastic basecamp for longer Lake Tahoe ski and snowboard trips.",
        length = 2.0, 
        elevation = 10000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg",
        userId = 3,
        createdAt = date(2022, 2, 3),
        updatedAt = date.today()
    )
    heavenly4 = Trail(
        name = "The Face",
        city = 'South Lake Tahoe',
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
        city = 'South Lake Tahoe',
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
        city = 'Mammoth Lakes',
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
        city = 'Mammoth Lakes',
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
        city = 'Mammoth Lakes',
        country = "United States of America",
        state = "California", 
        resort = "Mammoth Mountain",
        difficulty = "Beginner",
        description = "One of California's top resort towns for skiing and snowboarding is Mammoth. With a 3,100' vertical drop, the ski area is as large as its name would imply. An incredible variety of terrain is available for skiers and snowboarders of all skill levels, spread out throughout the 3,500 skiable acres.",
        length = 0.7, 
        elevation = 4500,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/1125078/pexels-photo-1125078.jpeg",
        userId = 4, 
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mammoth4 = Trail(
        name = "Hangman's Hollow",
        city = 'Mammoth Lakes',
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
        city = 'Mammoth Lakes',
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
        city = 'Big Bear Lake',
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Intermediate",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.1, 
        elevation = 7000,
        routeType = "Free-ride",
        previewImg = "https://www.bigbear.com/imager/s3_us-west-1_amazonaws_com/big-bear/images/old-site-images/Winter-Activities_bc0d2157d501d4729a3d5631708a6b2e.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear2 = Trail(
        name = "Easy Street",
        city = 'Big Bear Lake',
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Beginner",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.5, 
        elevation = 8000,
        routeType = "Free-ride",
        previewImg = "https://www.bigbear.com/imager/files_idss_com/C347/9805d1cb-5037-45d6-a8c4-da836fa31ad0_cf127ca3a98712e9d52213b1386347a9.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear3 = Trail(
        name = "Amusement Park",
        city = 'Big Bear Lake',
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
        city = 'Big Bear Lake',
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Intermediate",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 1.4, 
        elevation = 7100,
        routeType = "Free-ride",
        previewImg = "https://www.destinationbigbear.com/blog/wp-content/uploads/2015/02/trouble-on-the-slopes.jpg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    bear5 = Trail(
        name = "Inspiration",
        city = 'Big Bear Lake',
        country = "United States of America",
        state = "California", 
        resort = "Bear Mountain",
        difficulty = "Beginner",
        description = "Bear Mountain and Snow Summit, two of the top ski and snowboard resorts in southern California, are run by Big Bear Resorts. Just two hours from Los Angeles, on the banks of Big Bear Lake, these resorts provide skiers and snowboarders with excellent terrain for all skill levels and some of the top terrain parks in the world.",
        length = 0.7, 
        elevation = 6000,
        routeType = "Free-ride",
        previewImg = "https://snowbrains.com/wp-content/uploads/2022/03/SCR-20220323-l41.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh1 = Trail(
        name = "Vertigo",
        city = 'Wrightwood',
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
        city = 'Wrightwood',
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Intermediate",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 0.9, 
        elevation = 8000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/3988028/pexels-photo-3988028.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh3 = Trail(
        name = "Conquest",
        city = 'Wrightwood',
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Intermediate",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 1.1, 
        elevation = 7900,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/105784/pexels-photo-105784.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh4 = Trail(
        name = "Sunnyside",
        city = 'Wrightwood',
        country = "United States of America",
        state = "California", 
        resort = "Mountain High",
        difficulty = "Beginner",
        description = "One of the nearest places to ski and snowboard is Mountain High, which is located in the San Gabriel Mountains just 90 minutes outside of Los Angeles. 500 skiable acres and 1,600' of vertical are served by the two distinct base areas. Although the terrain may not be as challenging as Mammoth, Mountain High is beginner-friendly and offers enjoyable skiing and snowboarding close to the largest towns in southern California.",
        length = 1.3, 
        elevation = 8000,
        routeType = "Free-ride",
        previewImg = "https://images.pexels.com/photos/1603252/pexels-photo-1603252.jpeg",
        userId = 5,
        createdAt = date(2022, 3, 3),
        updatedAt = date.today()
    )
    mthigh5 = Trail(
        name = "Cruiser",
        city = 'Wrightwood',
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
    hoodmeadows1 = Trail(
        name = 'Super Bowl',
        city = 'Mount Hood',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Hood Meadows', 
        difficulty = 'Double Black Diamond',
        description = "One of Mount Hood's three ski areas is Mount Hood Meadows Ski & Snowboard Resort. Although Timberline Lodge could be popular in the spring and summer, Mount Hood Meadows offers the best range of year-round skiing terrain. Skiers and snowboarders may access 2,150 skiable acres in about 90 minutes from Portland. At Mount Hood Meadows, variety is crucial. There are excellent trees and glades for skiing and snowboarding, as well as a ton of family- and beginner-friendly access points.",
        length = 0.7,
        elevation = 8900,
        routeType = 'All-mountain',
        previewImg = 'https://i.ytimg.com/vi/5uNLqmnrPmA/maxresdefault.jpg',
        userId = 6,
        createdAt = date(2022, 12, 4), 
        updatedAt = date.today()
    )
    hoodmeadows2 = Trail(
        name = 'Pluto',
        city = 'Mount Hood',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Hood Meadows', 
        difficulty = 'Double Black Diamond',
        description = "One of Mount Hood's three ski areas is Mount Hood Meadows Ski & Snowboard Resort. Although Timberline Lodge could be popular in the spring and summer, Mount Hood Meadows offers the best range of year-round skiing terrain. Skiers and snowboarders may access 2,150 skiable acres in about 90 minutes from Portland. At Mount Hood Meadows, variety is crucial. There are excellent trees and glades for skiing and snowboarding, as well as a ton of family- and beginner-friendly access points.",
        length = 0.5,
        elevation = 8000,
        routeType = 'All-mountain',
        previewImg = 'https://static.rootsrated.com/image/upload/s--z_ovV7wQ--/t_rr_large_traditional/x7kr2okwowuyscohzayr.jpg',
        userId = 6,
        createdAt = date(2022, 12, 4), 
        updatedAt = date.today()
    )
    hoodmeadows3 = Trail(
        name = 'Heather Canyon',
        city = 'Mount Hood',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Hood Meadows', 
        difficulty = 'Double Black Diamond',
        description = "One of Mount Hood's three ski areas is Mount Hood Meadows Ski & Snowboard Resort. Although Timberline Lodge could be popular in the spring and summer, Mount Hood Meadows offers the best range of year-round skiing terrain. Skiers and snowboarders may access 2,150 skiable acres in about 90 minutes from Portland. At Mount Hood Meadows, variety is crucial. There are excellent trees and glades for skiing and snowboarding, as well as a ton of family- and beginner-friendly access points.",
        length = 1.2,
        elevation = 8800,
        routeType = 'Powder',
        previewImg = 'https://snowbrains.com/wp-content/uploads/2013/11/MtHoodMeadows2009.jpg',
        userId = 6,
        createdAt = date(2022, 12, 4), 
        updatedAt = date.today()
    )
    hoodmeadows4 = Trail(
        name = 'Conan Bowl',
        city = 'Mount Hood',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Hood Meadows', 
        difficulty = 'Double Black Diamond',
        description = "One of Mount Hood's three ski areas is Mount Hood Meadows Ski & Snowboard Resort. Although Timberline Lodge could be popular in the spring and summer, Mount Hood Meadows offers the best range of year-round skiing terrain. Skiers and snowboarders may access 2,150 skiable acres in about 90 minutes from Portland. At Mount Hood Meadows, variety is crucial. There are excellent trees and glades for skiing and snowboarding, as well as a ton of family- and beginner-friendly access points.",
        length = 0.9,
        elevation = 8500,
        routeType = 'Powder',
        previewImg = 'https://www.oregonlive.com/resizer/_Du-NwzYdXWab4PKuEjetJMg5sA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/UKYKF3B6BBDDBDM5WFOTI37YOY.jpg',
        userId = 6,
        createdAt = date(2022, 12, 4), 
        updatedAt = date.today()
    )
    hoodmeadows5 = Trail(
        name = 'Twilight Bowl',
        city = 'Mount Hood',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Hood Meadows', 
        difficulty = 'Double Black Diamond',
        description = "One of Mount Hood's three ski areas is Mount Hood Meadows Ski & Snowboard Resort. Although Timberline Lodge could be popular in the spring and summer, Mount Hood Meadows offers the best range of year-round skiing terrain. Skiers and snowboarders may access 2,150 skiable acres in about 90 minutes from Portland. At Mount Hood Meadows, variety is crucial. There are excellent trees and glades for skiing and snowboarding, as well as a ton of family- and beginner-friendly access points.",
        length = 1.3,
        elevation = 8700,
        routeType = 'All-mountain',
        previewImg = 'https://skinorthamerica100.com/wp-content/uploads/2017/09/32096522123_e8689472fc_o-1024x768.jpg',
        userId = 6,
        createdAt = date(2022, 12, 4), 
        updatedAt = date.today()
    )
    timberline1 = Trail(
        name = "Coffel's Run",
        city = 'Government Camp',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Timberline Summit Pass',
        difficulty = 'Intermediate',
        description = "At Timberline Lodge Ski Area, you can ski and snowboard all year long and enjoy some of the only lift-accessed glacier skiing in the US. On a clear day, Mount Hood's majestic magnificence will greet you as you approach the old ski lodge. In the slushy spring and summer, skiers and snowboarders from all over the world flock to Palmer Snowfield for the fantastic terrain parks and the riding.",
        length = 0.7,
        elevation = 7000,
        routeType = 'Free-ride',
        previewImg = 'https://www.dcski.com/images/article_photos/2021/1620617308_gapjkwbsqctb.jpg',
        userId = 7,
        createdAt = date(2022, 11, 30),
        updatedAt = date.today()
    )
    timberline2 = Trail(
        name = "Kip's Run",
        city = 'Government Camp',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Timberline Summit Pass',
        difficulty = 'Intermediate',
        description = "At Timberline Lodge Ski Area, you can ski and snowboard all year long and enjoy some of the only lift-accessed glacier skiing in the US. On a clear day, Mount Hood's majestic magnificence will greet you as you approach the old ski lodge. In the slushy spring and summer, skiers and snowboarders from all over the world flock to Palmer Snowfield for the fantastic terrain parks and the riding.",
        length = 0.8,
        elevation = 7000,
        routeType = 'Free-ride',
        previewImg = 'https://images.squarespace-cdn.com/content/v1/5e7a324590664f18b1bfea0c/1640300766232-0TCC83TGC02JM09SV1H5/timberlinelodgepalmerpost.png',
        userId = 7,
        createdAt = date(2022, 11, 30),
        updatedAt = date.today()
    )
    timberline3 = Trail(
        name = "Gordo's Mile",
        city = 'Government Camp',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Timberline Summit Pass',
        difficulty = 'Intermediate',
        description = "At Timberline Lodge Ski Area, you can ski and snowboard all year long and enjoy some of the only lift-accessed glacier skiing in the US. On a clear day, Mount Hood's majestic magnificence will greet you as you approach the old ski lodge. In the slushy spring and summer, skiers and snowboarders from all over the world flock to Palmer Snowfield for the fantastic terrain parks and the riding.",
        length = 1,
        elevation = 7000,
        routeType = 'Free-ride',
        previewImg = 'https://cloudfront-us-east-1.images.arcpublishing.com/opb/YLPG5ETZB5ESXB6QBPOJWALRTE.jpg',
        userId = 7,
        createdAt = date(2022, 11, 30),
        updatedAt = date.today()
    )
    timberline4 = Trail(
        name = 'Otto Lang',
        city = 'Government Camp',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Timberline Summit Pass',
        difficulty = 'Intermediate',
        description = "At Timberline Lodge Ski Area, you can ski and snowboard all year long and enjoy some of the only lift-accessed glacier skiing in the US. On a clear day, Mount Hood's majestic magnificence will greet you as you approach the old ski lodge. In the slushy spring and summer, skiers and snowboarders from all over the world flock to Palmer Snowfield for the fantastic terrain parks and the riding.",
        length = 1.3,
        elevation = 7000,
        routeType = 'Free-ride',
        previewImg = 'https://traveloregon.com/wp-content/uploads/2017/12/2020_car-free-mt-hood_pc-timberline_01.jpg',
        userId = 7,
        createdAt = date(2022, 11, 30),
        updatedAt = date.today()
    )
    timberline5 = Trail(
        name = "Norm's",
        city = 'Government Camp',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Timberline Summit Pass',
        difficulty = 'Intermediate',
        description = "At Timberline Lodge Ski Area, you can ski and snowboard all year long and enjoy some of the only lift-accessed glacier skiing in the US. On a clear day, Mount Hood's majestic magnificence will greet you as you approach the old ski lodge. In the slushy spring and summer, skiers and snowboarders from all over the world flock to Palmer Snowfield for the fantastic terrain parks and the riding.",
        length = 1.1,
        elevation = 6700,
        routeType = 'Free-ride',
        previewImg = 'http://snowbrains.com/wp-content/uploads/2018/05/Open-Resorts-10.jpg',
        userId = 7,
        createdAt = date(2022, 11, 30),
        updatedAt = date.today()
    )
    bachelor1 = Trail(
        name = 'Sunshine',
        city = 'Bend',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Bachelor', 
        difficulty = 'Beginner',
        description = "Mt. Bachelor is a strong contender for the #1 slot on your resort must-see list. Off the peak, the ski area extends over 4,318 acres, with a vertical drop of 3,365 feet. A ski area's size alone doesn't make it great; it takes a diversity of terrain, including trees, chutes, and other natural features. Mt. Bachelor has something to offer both families and beginners as well as advanced skiers and snowboarders.",
        length = 0.7,
        elevation = 6000,
        routeType = 'Park',
        previewImg = 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Pine_Marten_Express.JPG',
        userId = 8,
        createdAt = date(2022, 9, 18),
        updatedAt = date.today()
    )
    bachelor2 = Trail(
        name = 'Milky Way',
        city = 'Bend',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Bachelor', 
        difficulty = 'Beginner',
        description = "Mt. Bachelor is a strong contender for the #1 slot on your resort must-see list. Off the peak, the ski area extends over 4,318 acres, with a vertical drop of 3,365 feet. A ski area's size alone doesn't make it great; it takes a diversity of terrain, including trees, chutes, and other natural features. Mt. Bachelor has something to offer both families and beginners as well as advanced skiers and snowboarders.",
        length = 0.6,
        elevation = 5900,
        routeType = 'Park',
        previewImg = 'https://www.gannett-cdn.com/-mm-/61866bd7251feea2f3f94c2119941ae1f9ce176e/c=0-374-2014-1512/local/-/media/2017/11/14/Salem/Salem/636462632444328361-MtBachelor-WedNov14-1.JPG',
        userId = 8,
        createdAt = date(2022, 9, 18),
        updatedAt = date.today()
    )
    bachelor3 = Trail(
        name = 'Home Run',
        city = 'Bend',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Bachelor', 
        difficulty = 'Beginner',
        description = "Mt. Bachelor is a strong contender for the #1 slot on your resort must-see list. Off the peak, the ski area extends over 4,318 acres, with a vertical drop of 3,365 feet. A ski area's size alone doesn't make it great; it takes a diversity of terrain, including trees, chutes, and other natural features. Mt. Bachelor has something to offer both families and beginners as well as advanced skiers and snowboarders.",
        length = 0.9,
        elevation = 6100,
        routeType = 'Free-ride',
        previewImg = 'https://sunriverlodging.com/wp-content/uploads/2020/11/mt-bachelor-parking-reservations.jpg',
        userId = 8,
        createdAt = date(2022, 9, 18),
        updatedAt = date.today()
    )
    bachelor4 = Trail(
        name = 'Midway',
        city = 'Bend',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Bachelor', 
        difficulty = 'Beginner',
        description = "Mt. Bachelor is a strong contender for the #1 slot on your resort must-see list. Off the peak, the ski area extends over 4,318 acres, with a vertical drop of 3,365 feet. A ski area's size alone doesn't make it great; it takes a diversity of terrain, including trees, chutes, and other natural features. Mt. Bachelor has something to offer both families and beginners as well as advanced skiers and snowboarders.",
        length = 1.1,
        elevation = 6200,
        routeType = 'Free-ride',
        previewImg = 'https://arrivednow.com/wp-content/uploads/2018/07/Mt.-Bachelor-Ski-Area.jpg',
        userId = 8,
        createdAt = date(2022, 9, 18),
        updatedAt = date.today()
    )
    bachelor5 = Trail(
        name = 'Leeway',
        city = 'Bend',
        country = "United States of America",
        state = 'Oregon',
        resort = 'Mount Bachelor', 
        difficulty = 'Beginner',
        description = "Mt. Bachelor is a strong contender for the #1 slot on your resort must-see list. Off the peak, the ski area extends over 4,318 acres, with a vertical drop of 3,365 feet. A ski area's size alone doesn't make it great; it takes a diversity of terrain, including trees, chutes, and other natural features. Mt. Bachelor has something to offer both families and beginners as well as advanced skiers and snowboarders.",
        length = 1.2,
        elevation = 6300,
        routeType = 'Powder',
        previewImg = 'https://a.espncdn.com/photo/2013/0419/as_ski_mtbachelor.jpg',
        userId = 8,
        createdAt = date(2022, 9, 18),
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
    db.session.add(hoodmeadows1)
    db.session.add(hoodmeadows2)
    db.session.add(hoodmeadows3)
    db.session.add(hoodmeadows4)
    db.session.add(hoodmeadows5)
    db.session.add(timberline1)
    db.session.add(timberline2)
    db.session.add(timberline3)
    db.session.add(timberline4)
    db.session.add(timberline5)
    db.session.add(bachelor1)
    db.session.add(bachelor2)
    db.session.add(bachelor3)
    db.session.add(bachelor4)
    db.session.add(bachelor5)









    db.session.commit()

def undo_trails():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
  