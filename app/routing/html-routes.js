// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');


// Routes
// =============================================================
module.exports = function(app) {
    // if asked will send survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/restaurant.html'));
    });

    app.get('/main', function(req, res)	{
    	res.sendFile(path.join(__dirname + '/../public/main-page.html'));
    });

    // if other send index page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

<<<<<<< HEAD
};
=======
}




//Will update this when all of the html files are complete
>>>>>>> 49b29294c376d3003f2b6946276f866f8020aab4
