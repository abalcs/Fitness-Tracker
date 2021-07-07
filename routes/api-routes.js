// Require mongoose
const mongoose = require("mongoose");

//Create  Mongoose Schema
const Schema = mongoose.Schema;

// Create the new workout schema (day, exercises - name, type, distance, duration, weight, sets, reps)
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
        required : "You must enter the exercise NAME."
      },
      type : {
        type: String,
        trim : true,
        required : "You must enter the exercise TYPE."
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "You must enter the exercise DURATION."
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

// Create the mongoose model 'workout' and apply the workout schema to the model
const Workout = mongoose.model("workout", WorkoutSchema);

// Export the workout model
module.exports = Workout;