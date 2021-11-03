const mongoose = require('mongoose')

// Function to connect to the mongodb DataBase
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// mongoose is also used to create models and structure our data in a nice way
