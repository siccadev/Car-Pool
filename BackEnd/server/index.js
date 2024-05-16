const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const userRoute = require('../routes/user.js');
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors()); // Enable CORS
app.use(express.json()); 

app.use('/users', userRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  