const jwt = require('jsonwebtoken');
function verifyToken(request, response, next) {
const token = request.header('Authorization');
if (!token) return response.status(401).json({ error: 'Acesso negado' });
try {
 const decoded = jwt.verify(token, 'chave');
 request.id = decoded.id;
 next();
 } catch (error) {
 response.status(401).json({ error: 'Token inválido' });
 }
 };

module.exports = verifyToken;