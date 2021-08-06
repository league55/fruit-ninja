const temporaryTestToken = "qwertyuiopasdfghjklzxcvbnm123456qwertyuiopasdfghjklzxcvbnm123456qwertyuiopasdfghjklzxcvbnm123456";
const jwt = require('jwt-simple');


export function encode(token) {
    return jwt.encode(token, temporaryTestToken);
}

export function decode(token) {
    return jwt.decode(token, temporaryTestToken);
}
