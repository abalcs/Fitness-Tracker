const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3010;

// Create the express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Create mongoose database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// create the routes for api-routes.js and html-routes.js
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen to the request on a port
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}!`);
});