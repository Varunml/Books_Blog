const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ratingSchema = new mongoose.Schema({

    bookIds: 

       [{type:mongoose.Schema.Types.ObjectId,ref:"bookModel"}],

       rating:{
        type:Number,
        comment: String,
       },
       description:{
        type: String
       },
    
    },
         {timestamps:true}

    
);

const RatingsModel = mongoose.model("Ratings", ratingSchema);



module.exports= RatingsModel;
