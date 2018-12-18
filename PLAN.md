#Full Stack auth Review

#Front-end

##Component Structure
* Nav bar 
* Home aka Landing Page
* Login Page 
* Profile Page 
* Couch Browser
* Add Couch 
* Footer?
* Cart?

## Redux
*store
*reducer
    *reducer function
    *initial state
        *user: null
        *couches?
    *action creators
    *action types(string const)
*Provider in index.js 
*connect() and mapStatetoProps 

#Routing 
*routes 
    */home
    */coolcouches
    */profile
    */cart?
*index.js BrowserRouter 
*Links in Nav bar
*Routes in routes.js

#Back-end

# Endpoints aka Routes 
* GET, POST /api/couches
* /api/me
* /auth/callback 

##Controllers 
* couches controller 
* auth controller 
* user controller 
* cart controller?

## Server
*index.js


#Database

##tables
*user
    *id serial
    *auth0_id text
    *email text
    *name text
    *picture text
*couches
    *id serial 
    *name text
    *price int
    *image text

##Queries (functions for massive)
* select all couches 
* find user 
* create user
* create couch?


#npm packages we'll use 
*express
*body-parser
*massive
*react-router-dom
*react-redux
*redux
*dotenv
*http-proxy-middleware


##setupProxy.js