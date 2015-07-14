var Person = require('./models/nerd');

    module.exports = function(app) {
        // server routes
        // handles api calls
        
        // sample api route to send json data
        app.get('api/people', function(req, res) {
            Person.find(function(err, people) {
                if (err) {
                    res.send(err);
                }
                res.json(people);
            });
        });
        
        // loads the index page at any url route
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); 
        });
        
        
        
    };