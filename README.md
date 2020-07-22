# :telescope: Rüfus Museum :hourglass:

### :bulb: Creator:

- Joshua Soave

## :mag: About:

[The Rüfus Museum](https://rufus-museum.herokuapp.com/) is a virtual museum with exhibits from across the globe for users to enjoy from the comfort of their own home. Creating an account allows users to add artifacts to their favorites list, but this museum is free to all guests.

## :pencil: Features:

The User Can:
- View exhibits
- Favorite Artifacts
- Learn about upcoming events

## :european_castle: The Build: :moyai:
### Languages
- HTML5
- CSS3
- Javascript
### Technologies
- React
- Node.js
- Express
- Materialize
- Create React App
- Heroku

## :clipboard: :calendar: Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Fri 7/10  | Idea, Wireframed, Read Create React App Docs, Made Trello Board |
| Sat 7/11      | Setup react app and react router      |
| Sun 7/12    | Created models, and Node.js backend |
| Mon 7/13      | Worked on show page for each exhibit  theme    |
| Tue 7/14    | Used react frontend to render data for each exhibit theme on the page |
| Wed 7/15     | Created a user and sessions model and setup authentication   |
| Thur 7/16    | Started work on user favorites feature |
| Fri 7/17      | Finished work on user favorite feature and compiled seed data for database      |
| Sat 7/18    | Deployed API to heroku and began styling |
| Sun 7/19      | Finalized styling and deployed frontend to Heroku     |
| Mon 7/20    | Began working on portfolio page |
| Tue 7/21      | Finalized portfolio and READ.me      |

## :hotsprings: Installation: :construction:
- Visit the [repository](https://rufus-museum.herokuapp.com/)
- Clone or download the repo
- Run NPM install
- Ensure all dependencies are properly installed
- Run NPM start

NOTE: if you want to create your own data or alter the API
- Get the code for the API [here](https://github.com/joshuasoave/museum_api)
- Run MongoD or connect to your Mongo Atlas account
- Get the API running with nodemon
- Connect the database to this app through a proxy in your package JSON

## :passport_control: :white_check_mark: Wins:
- Teaching myself to work with two entirely new technologies. This is was my first time using Create React App and React Router. I really liked how Link and Router could be used to give the appearance of separate pages within one app. Together, they can create some seamless single page applications.
- Implementing a responsive design that looks clean and sleek on mobile. I styled for mobile first and then used a media query for the desktop styling. Flexbox and responsive page layout helped ensure it looks good on different screen widths. Also, using icons on the bottom nav and back or favorites icons on the artifacts page gave it the feel of a truly mobile application.
- Coming up with create ways to solve problems through my database queries. Originally, I created a database call for artifacts and would sort the data on the frontend. I realized it would be more efficient to query for only artifacts in that theme and not get data I didn't need. This allowed me to get information on artifacts pertaining to the theme of that exhibit.

```Javascript
//gets data from the api with the theme of egypt and sets that to the state
componentDidMount = () => {
  axios.get(`${this.callDatabase()}/artifacts/egypt`).then(
    (response) => {
      this.setState({
        egypt:response.data
      })
    }
  )
}
```
```Javascript
///////////////
//Get By Theme
//////////////
router.get('/:theme', (req, res) => {
  Artifacts.find({theme: req.params.theme}, (err, artifacts) => {
    res.json(artifacts);
  })
})
```

## :interrobang: Struggles :interrobang:
- In the beginning, I didn't fully understand how state was being passed around the app. This led to some struggles early on where data was not being passed to certain components. After attending an optional lecture, I learned more about how state needs to be passed down, back up, and the importance of binding this.
- Getting the database and frontend to interact properly was tricky when they were deployed. I had the backend proxied on localhost so they were not runing on the same port. However, the proxy did not work with heroku. I had to move all the server.js and database files into a another repo and deploy that to heroku separate from the frontend.  
- Implementing the favorite feature seemed like a simple task, but it was not. It was tricky to access the users favorites array and come up with a way to check if the user already had this artifact in their favorites array. The solution I came up with was to loop through the current arrays and check the artifact id with the logged in user's current favorites to see if the artifact should be favorited or unfavorited.

```Javascript
//////////
//Favoriting button clicked
//////////
favoriteArtifact = () => {
  //save the array to this variable so we dont have to keep typing it
  let currentFavs = this.props.loggedInUser.favorites
  //loop through the array of users current favs to compare the ids
  for(let i = 0; i < currentFavs.length; i++) {
    // console.log(currentFavs[i]._id);
    //if the current artifact is already in their array, unfavorite it. Check all of the current favorites by comparing ids.
    if(this.props.location.state.artifact._id === currentFavs[i]._id) {
      //function that removes it from favorites array
      this.removeFavorite(i)
      return null
    }
  }
  //add to favorites if it is not in the users array already. this function makes an api call to add artifact to the users favorite a
  this.addFavorite();
}
```

## :ticket: Future Features :japanese_castle:
- Change the icon on exhibit page so it updates when the user already has this artifact in their favorites or when they click on the icon.
 
