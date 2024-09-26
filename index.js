require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(`mongodb+srv://westhighscienceclub:${process.env.MONGO_PASS}@westhighscienceclub.nidjy.mongodb.net/`)
// const mongoClient = new MongoClient(`mongodb+srv://westhighscienceclub:${process.env.MONGO_PASS}@westhighscienceclub.nidjy.mongodb.net/`);
var database, membersCollection;

const PORT = 8000;
const app = express();

app.use(cors({
    origin: "*",
    methods: "*",
}));

app.get("/api/leaderboard", async (req, res) => {
    const members = await membersCollection.find({}).toArray();

    res.json(members);
});

(async () => {
    database = mongoClient.db("database");
    membersCollection = database.collection("members");

    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });
})();
