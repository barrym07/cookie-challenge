const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { response } = require('express');


const app = express();
const port = 3001;
app.use(express.json());
app.use(cookieParser());
// Create a repository for this challenge named usaf-cookies-challenge.

// Create an Express application that sets a cookie when routed to /login with their name. If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".


app.post('/login', (req, res) => {
  let username = req.body.name;
  res.cookie('name', username);
  res.send(`Cookie created for username ${username}`)
});

app.get('/hello', (req, res) => {
  if (req.cookies.name) {
    res.send(`Welcome, ${req.cookies.name}!`)
  }


})


app.listen(port, () => console.log(`Cookie Challenge app listening at http://localhost:${port}`))