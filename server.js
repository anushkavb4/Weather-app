const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { weather: null, error: null });
});

app.get("/weather", (req, res) => {
    // Get the city from the query parameters
    const city = req.query.city;
  
    // Add your logic here to fetch weather data from the API
    ``;
    // Render the index template with the weather data and error message
    res.render("index", { weather: null, error: null });
  });

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});