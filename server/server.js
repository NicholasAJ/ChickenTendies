const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
// const bodyparser = require('body-parser');
// app.use(bodyparser.json);

// const user = require('./route/user');
// app.use('/api/user', user);

// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');
require('./routes/review.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
