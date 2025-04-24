const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ratingSchema = new mongoose.Schema({

    bookIds: 

       [{type:mongoose.Schema.Types.ObjectId,ref:"bookModel"}],

       rating:{
        type:Number,
        comment: String
       }

       // [{ type: mongoose.Schema.Types.ObjectId, ref: "RatingsModel" }],

    
});

const RatingsModel = mongoose.model("Ratings", ratingSchema);



module.exports= RatingsModel;
