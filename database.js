const mongoose = require("mongoose");

class Database {

    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://reddit:redit123@redditcluster.03sudaf.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("db connection successful");
        })
        .catch(()=>{
            console.log("db connection error " + err);
        })
    }
}

module.exports = new Database();


