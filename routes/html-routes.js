const router = require('express').Router();
const path = require('path');


// Get request for the homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// Get request for the exercise page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// Get request for the stats page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})


//Export html routes
module.exports = router;