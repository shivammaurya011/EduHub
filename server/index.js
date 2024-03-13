const express = require("express");
const userRoute = require('./routes/user.route')
const connection = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/api/user', userRoute)

app.all("*", (req, res) => {
    res.status(404).send("OOPS 404 Page Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, async () => {
    try {
        await connection();
        console.log(`Server is running at ${port}.`);
    } catch (error) {
        console.log(error.message);
    }
});
