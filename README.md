# partyBnB

## 1.Live Site

## 2.Background and Overview
partyBnB, app inspired by AirBnB, is a social media application that allows users to share spots they can rent for parties. A user can book another users's party spot, in a location and leave reviews.

Price is important for customers booking online travel. PartyBnb is a web platform where users can rent out their real estate to travelers and where travelers can save money, hosts can make money, and users can share the culture of the city.

* Hosts can post their space with an image and a description of their space.
* Travelers can search for spaces by location, see reviews, and make bookings.

Partybnb is primarily built with the MERN stack: MongoDB, Express, React, and Node. MongoDB's geometries and Geospatial query reatures are used to allow users to search for spaces based on their query location.

## 3.Functionality & MVP
1. Hosting on Heroku ()
2. Authentication (2 days)
* Users can sign up, sign in, log out
* Users can't use certain features without logging in (creating spots & bookings)
3. Spots(2 days)
* Logged in users can create spots
* Users can view a list of spots
4. Bookings(2 days)
* Logged in users can book a spot
5. Reviews(2 days)
* Logged in users can review a spot
* Logged in users can review a user
6. Spots search (by location & availability) & Google Maps on search (2 days)
* Users can search for spots through google maps
7. Bonus: User/host profiles(3 days)
* Users have a public profile of their spots and bookings
8. Bonus: Messages (3 days)
9. Production README ()

## 4.Technologies & Challenges

### 1.Architecture
PartyBnB is built with the MERN stack (MongoDB, Express, React, and Node). 
It features a frontend agnostic API in conjunction with client side rendering with React.

Additionally, bundling of client-side javascript is accomplished by Webpack, and Babel is used to transpile ES6+ Javascript for backward browser compatibility.

Backend: Node, Express, MongoDB

PartyBnB back-end HTTP API is expected to be relatively small since it's role is limited to retrieving user records and establishing a websocket connection to rapidly synchronize data between users.

Frontend: React and React Native with Redux

### 2.Technical challenges:
* Reading data from MongoDB database and organizing for display
* Implement search (by location & availability) & Google Maps on search

## 5.Group Members & Work Breakdown
Paul Kim, Corina Schambacher and Nick Saulsberry
