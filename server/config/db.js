const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DB_URL;

if (!db_url) {
    console.error("DB_URL is not defined in the environment variables.");
    process.exit(1);
}

mongoose.set("strictQuery", false);

const connection = async () => {
    try {
        const connected = await mongoose.connect(db_url);
        if (connected) {
            console.log("Connected to the database.");
        }
    } catch (e) {
        console.error("Error connecting to the database:", e.message);
        process.exit(1);
    }
};

module.exports = connection;
