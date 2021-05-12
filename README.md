# MatchPartner 
------

## Description
------
This app will connect you to people who need a partner for their favourite sports to make appointments for like playing Basketball.

## User Stories
------
* _404_ - As a user i can see a 404 page when i try to open a page that´s not existent
* _SignUp_ - As a user i can SignUp to the platform, to be able to LogIn
* _LogIn_ - As a user i can LogIn to the platform so i can create new matches or join pending matches
* _LogOut_ - As a user i can LogOut from the plattform
* _Profile_ - As a user i can see my Profile where i can see my created matches, edit, delete and create new matches
* _Match-List_ - As a user i can see all the other offered matches that i could join and comment them
------

## Backlog
------
* Filter by sports
* Upload profile image
* NewsFeed of users favourite sport in profile

# Client
------

## Routes
------
* /auth/signup - SignUp form
* /auth/login - LogIn form
* /Homepage - Profile
* /Homepage/create - create a new match
* /Homepage/edit - edit a pending match
* /Homepage/delet - delete a match
* /matches - list of matches
* /404

## Pages
------
* Landing page?
* SignUp page
* LogIn page
* Homepage (Profile)
* Match list page
* 404

## Components
------
* SignUp
* SignIn
* Profile
* AddForm for matches
* List of Matches
* Navbar / Footer?
* 404

# Server
------

## Models
------

### User Model
    username: String //required & unique
    email: String //required & unique
    password: String //required 
    favourite sports: String

### Match Model
    Sports type: String
    Date & time: String
    Duration: number
    Number of participants: number
    equipment needed

### Comment Model

## API Endpoints/Backend Routes
------
* GET/auth/profile
* POST/auth/signup
* POST/auth/login
* POST/auth/logout
* GET/matchlist
* POST/profile/newmatch
* DELETE/profile/deletematch
* PUT/profile/edit

## Links
------

### Git
------

### Slides
------



### enjoy :tennis::basketball::soccer::football: