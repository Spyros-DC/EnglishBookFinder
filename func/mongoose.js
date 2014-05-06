//mongoose
var mongoose = require( 'mongoose' ); //MongoDB integration

mongoose.connect('localhost/require');

// mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL + 'englishbooks');

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log('ok!!!!!!');
    });

var Schema = mongoose.Schema;    

var English = mongoose.model('English', 
    new Schema({ 
     "Εκδόσεις" : String, "ISBN" : Number, "Τίτλος" : String, "Τιμή_χονδρικής" : Number, "Τιμή_λιανικής" : Number}), 
        'tsigaridas');

exports.English = English;
