//STEP 1 - Add Express to your Node server (make sure you have installed it...):

//STEP 4 - At the bottom of this file, you will see some commented out code. Move section 1 here:



//STEP 2 - var app and var port will go here:


//STEP 5 - Finally grab section 2 at the bottom of this file and drop it here:

//STEP 3 - Code for your app.listen() here:



///// ***** EXTRA CODE YOU WILL NEED FOR TESTING THE APP TO MAKE SURE YOU ARE DOING THINGS CORRECTLY! ***** /////

///////////////////
//// SECTION 1 ////
///////////////////

// var session = require('express-session');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var morgan = require('morgan');
// var mongoose = require('mongoose');


///////////////////
//// SECTION 2 ////
///////////////////

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.static(__dirname + '/public'));

// app.use(session({
//     secret: 'carpediem',
//     saveUninitialized: false,
//     resave: false
// }));

// var isAuthenticated = function (req, res, next) {
//     if (req.session.user) {
//         next();
//     } else {
//         return res.status(403).send('Please login first')
//     }
// }


// /**************** API Controller *************/
// var UserCtrl = require('./api/controllers/UserCtrl.js');
// var ListCtrl = require('./api/controllers/ListCtrl.js')


// /**************** API *************/

// app.post('/auth/login', UserCtrl.login);

// app.get('/auth/logout', UserCtrl.logout);

// app.get('/api/getLists', isAuthenticated, ListCtrl.getLists)

// app.post('/api/addList', isAuthenticated, ListCtrl.addList);

// app.post('/api/deleteList', isAuthenticated, ListCtrl.deleteList);

// app.post('/api/addCard', isAuthenticated, ListCtrl.addCard);

// app.post('/api/deleteCard', isAuthenticated, ListCtrl.deleteCard);

// app.post('/api/moveCard', isAuthenticated, ListCtrl.moveCard);

// /************ END API *************/


// /*************** DB ***************/
// var mongoUri = 'mongodb://localhost:27017/betterTodo';
// mongoose.connect(mongoUri);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log('connected to db at ' + mongoUri)
// });
