from app.models import db, Trail


def seed_trails():
    # BOREAL TAHOE
    boreal1 = Trail(
        name = "Ponderosa",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 0.7, 
        elevation = 7701,
        routeType = "All-mountain",
        previewImg = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b6/9c/d7/new-year-s-eve-skiing.jpg?w=1200&h=-1&s=1",
        userId = 1
    )
    boreal2 = Trail(
        name = "Tamarack",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 0.4, 
        elevation = 7000,
        routeType = "Powder",
        previewImg = "https://d3ne5s9fv9p81l.cloudfront.net/public/wt/ac/58/20191219070340113759839.jpg?imageView2/2/format/auto",
        userId = 1
    )
    boreal3 = Trail(
        name = "Sunrise Blvd",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "Hello this is a test",
        length = 2.5, 
        elevation = 7000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/950740/pexels-photo-950740.jpeg",
        userId = 2
    )
    boreal4 = Trail(
        name = "Mariposa",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "Hello this is a test",
        length = 1.5, 
        elevation = 5500,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/880497/pexels-photo-880497.jpeg",
        userId = 2
    )
    boreal5 = Trail(
        name = "Juniper",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 0.8, 
        elevation = 6500,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg",
        userId = 2
    )
    boreal6 = Trail(
        name = "Kiss A Bear",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "Hello this is a test",
        length = 0.5, 
        elevation = 5000,
        routeType = "Park",
        previewImg = "https://images.pexels.com/photos/4580974/pexels-photo-4580974.jpeg",
        userId = 2
    )
    boreal7 = Trail(
        name = "Prospector",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Intermediate",
        description = "Hello this is a test",
        length = 0.8, 
        elevation = 6500,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/8404254/pexels-photo-8404254.jpeg",
        userId = 2
    )
    boreal8 = Trail(
        name = "South 40",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Beginner",
        description = "Hello this is a test",
        length = 0.6, 
        elevation = 5000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/7987347/pexels-photo-7987347.jpeg",
        userId = 2
    )
    boreal9 = Trail(
        name = "Chukker",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 0.4, 
        elevation = 7500,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/869263/pexels-photo-869263.jpeg",
        userId = 2
    )
    boreal10 = Trail(
        name = "Klondike",
        country = "United States of America",
        state = "California", 
        resort = "Boreal Mountain Resort",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 1, 
        elevation = 7000,
        routeType = "Freeride",
        previewImg = "https://images.pexels.com/photos/68398/pexels-photo-68398.jpeg",
        userId = 2
    )
    # HEAVENLY TAHOE
    heavenly1 = Trail(
        name = "Killerbrew Canyon",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Double Black Diamond",
        description = "Hello this is a test",
        length = 0.7, 
        elevation = 9000,
        routeType = "All-mountain",
        previewImg = "https://images.pexels.com/photos/3600569/pexels-photo-3600569.jpeg",
        userId = 2
    )
    heavenly2 = Trail(
        name = "Milky Way Bowl",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "Black Diamond",
        description = "Hello this is a test",
        length = 1.5, 
        elevation = 9500,
        routeType = "Powder",
        previewImg = "https://images.pexels.com/photos/352092/pexels-photo-352092.jpeg",
        userId = 2
    )
    trail3 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail4 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail5 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail6 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail7 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail8 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail9 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
    )
    trail10 = Trail(
        name = "",
        country = "United States of America",
        state = "California", 
        resort = "Heavenly Lake Tahoe",
        difficulty = "",
        description = "",
        length = "", 
        elevation = "",
        routeType = "",
        previewImg = "",
        userId = 2
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


    db.session.commit()

def undo_trails():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
