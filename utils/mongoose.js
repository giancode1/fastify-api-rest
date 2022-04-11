const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    













