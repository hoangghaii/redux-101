const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

// Add CORS options
const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to Redux-101 | v1.0.0" });
});

// routes
require("./app/routes/todos.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
