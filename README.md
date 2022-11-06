# WinterTrails 🗻

WinterTrails is a web-application clone inspired by [AllTrails](https://www.alltrails.com/), that allows users to find snowboarding/skiing trails within a resort across the U.S.A.

####  [WinterTrails](https://winter-trails-capstone.herokuapp.com/)

### Please see below links to Project Wiki:
##### [API Documentation](https://github.com/kevykim/CapStone-Project/wiki/API-Documentation)
##### [Database Schema](https://github.com/kevykim/CapStone-Project/wiki/DB-Schema)
##### [Features](https://github.com/kevykim/CapStone-Project/wiki/Features)
##### [Redux State](https://github.com/kevykim/CapStone-Project/wiki/Redux-State)
##### [User Story](https://github.com/kevykim/CapStone-Project/wiki/User-Stories)
##### [Wireframe](https://github.com/kevykim/CapStone-Project/wiki/Wireframes)



### This project is built with:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-orange?style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

# Run Locally
1. Clone the application
``` git clone https://github.com/kevykim/CapStone-Project.git ```
2. Create a .env file
- In the file, add the following:
    ```
    SECRET_KEY=<Your own SECRET KEY>
    DATABASE_URL=sqlite:///dev.db
    ```
    (Look at .env.example for reference)
3. Backend instruction:
- CD to the root folder 
- Run these commands
    ```
    pipenv install -r requirements.txt
    pipenv shell
    flask db upgrade
    flask seed all
    flask run
    ```
4. Frontend instruction:
- CD into the react-app folder
- Run these commands
    ```
    npm install
    npm start
    ```

# Features Direction
## HomePage
<img src='react-app/public/readmepics/Home Page.gif'/>

## Sign up and Log in
<img src='react-app/public/readmepics/signupandlogin.gif'/>

## Demo User
<img src='react-app/public/readmepics/DemoUser.gif'/>

## Create trail
<img src='react-app/public/readmepics/Createtrail.gif' />

## Update and Delete trail
<img src='react-app/public/readmepics/update&deletetrail.gif'/>

## Create review
<img src='react-app/public/readmepics/Createreview.gif'/>

## Update and Delete review
<img src='react-app/public/readmepics/editdeletereview.gif' />

# Future Focus
- Add a search bar where users can look up by the name of a trail, state, or country.
- Add google maps for users to keep track of where they are and see other trails nearby.
- Add weather api so that users can see the weather conditions within a specific trail.
- Work on community feature where all users can meet and post comments/pictures in their own community page.
- Work on shop feature where users can only purchase products that is enlisted by WinterTrails store. 