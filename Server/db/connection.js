const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://root:root@chatapp.pwdu0rw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("Chatapp").command({ ping: 1 });
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const connectMongoose = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { client, connectToMongoDB, connectMongoose };
