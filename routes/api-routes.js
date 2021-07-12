// Require the express router and workout model
const router = require("express").Router();
const Workout = require("../models/exercise");

// Create get request for returning workouts


// Look up how to do aggregate which will replace find on both gets

router.get('/api/workouts', (req, res) => {
    // Workout.find()
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          }
        }
      }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: '$exercises.duration'
          }
        }
      }
    ])
    .sort({
      _id: -1
    })
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

// Create workout with post
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

// Update the workout with put
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        {
            $push: {exercises: req.body}
        },
        {
            new: true
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
})




// Export API routes
module.exports = router;