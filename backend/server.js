

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')



mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log('Connected to MongoDB')
  })
  .catch(err=>{
    console.error('Error connecting to MongoDB', err)
  })
//const helmet = require('helmet');
//app.use(helmet())

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: false}))
//app.use(bodyParser.json())
//app.use(express.static(__dirname + '/public'));
 


//routes
app.use('/api/user', userRoutes)
app.use('/api/workouts',workoutRoutes) 



 
// app.post('/login', async (req, res) => {
//     try{
//       const {name, password} = req.body; 
//       const user  = await User.findOne({name, password});
//       if(user){
//       res.status(200).json({message: 'Login successful'})
//     }
//     else{
//       res.status(400).json({message: 'Login unsuccessful'})
//     }
//     console.log(user)
//     }
//     catch{
//       res.status(500).json({message: 'Server error'})
//     }
//     console.log(req.body)
   
// });




// Server listen
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//app.use(
  //helmet.contentSecurityPolicy({
    //directives: {
      //dafaultSrc: ["'self'"],
      //connectSrc: ["'self'", 'http://localhost:5000'],
    //}
  //})
//)

