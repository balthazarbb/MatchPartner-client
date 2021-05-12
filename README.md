# MatchPartner :tennis::basketball::soccer::football:
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
* _Match-details_ -  as a user i can join the match, use the comment section and see all participants
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
* / - Landing page
* /auth/signup - SignUp form
* /auth/login - LogIn form
* /profile
* /matches - list of matches
* /matchdetails - comment match
* /404

## Pages
------
* Homepage - Landing page
* SignUp page
* LogIn page
* Profile page
* Match list page
* Match detail page wit comment section
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

## Services?
------
* Auth Service
    auth.login()
    auth.signup()
    auth.signin()
    auth.user()

# Server
------

## Models
------

### User Model
    username: String //required & unique
    email: String //required & unique
    password: String //required 
    favourite sports: String
    profile pic??: img

### Match Model
    Sports type: String
    Date & time: String
    Duration: number
    Number of participants: number
    equipment needed: String
    user: ['ref']
    comments: ['ref']

### Comment Model
    username: String
    message: String
    timestamps: true

## API Endpoints/Backend Routes
------
* GET/auth/profile
* POST/auth/signup
* POST/auth/login
* POST/auth/logout
* GET/matchlist
* GET/detailedMatch
* POST/profile/newMatch
* DELETE/profile/deleteMatch
* PATCH/profile/editMatch
* POST/create comment
* GET/detailedMatch/:id

## Links
------

### Git
------

### Slides
------



### enjoy!! :slightly_smiling_face: 