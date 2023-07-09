This is a small patients list for nurses to log in patients. We built this MERN STACK with Authentication. We used a static method for hashing passwords with bcrypt. Json Web Token was also used to authenticate login users. We used validator to make sure the email and password are valid before entering the app giving error, when not. You can sign up and log in. You must be signed in to view patients list, if not logged in you will not see to add patients. You must have valid password or you will be given an error. Once logged in, you will see add and delete patients, only when logged in. This app was tested through postman. It uses mongoo DB for storing data with patients and users. We could not deploy. We tried using Render.com, could not get the app.js to read, we tried to change app.js to server.js in the root package.json. It was deleted in order for our MERNSTACK to present and show working functional code today. We upgraded the css with a gradient background. we tried to animate the background but ran into useEffect/react-script issuses.

We installed in our backend
-express
-dotenv
-mongoose
-node
-bcrypt
-validator
-Json Web Token

We installed in our frontend
-date-FNS(makes date look formal instead of multiple numbers)
-react
-react-scripts
-material symbol (icons instead of words)

Some methods we used
-split
-compare
-isEmail
-this.
-dispatch
-emptyFields
-router.
-app.
-Navigate
-.push, .verify, .findOne, .length, .statics

Some properties we used
-state
-response.ok

Some functions we used 
-switch()
-async/await()
-.Provider()
-useReducer()
-fetch()
-(e) event handler
-hash()
-genSalt()
