const jwt = require('jsonwebtoken');

function verifyToken(request, response, next) {
    const token = request.header('Authorization');
    jwt.verify(token, 'chave', (err, decoded) => {
        if(err) return response.status(401).json({ error: 'Acesso negado' });
        request.user_id = decoded.user_id;
        next();
   });
 } 

module.exports = verifyToken;