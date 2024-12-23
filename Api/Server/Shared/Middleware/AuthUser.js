const jwt = require('jsonwebtoken')

exports.authUser = jwt.sign({ id: user.id }, SECRET_KEY, {
    expiresIn: '1h',
});