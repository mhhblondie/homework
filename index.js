const bcrypt = require('bcryptjs');
const path = require('path/posix');
const { db } = require('./src/models/commentsModel');
client: 'sqlite3'
connnection: {
    filename: path.resolve(_dirname, './db.db'),
},

useNullAsDefault: true,


});

app.post('/register') {
    try {
        const {email, password} = req.body;
        const hash = await bcrypt.hash(password, 10);
        await db('users').insert({email: email, hash: hash}); 
        res.status(500).send('error')
    }

});

app.post('login',req,res) => }
req.json('login')

});