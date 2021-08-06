import {decode} from "../security/jwt";
import {getEncodedToken} from "../security/tokenManagement";


export function redeemToken(token) {
    const encoded = getEncodedToken(token);
    return fetch('http://127.0.0.1:5000/tokens/redeem', {
        method: 'POST',
        body: encoded
    }).then(r => r.json())
        .then(resp => {
            let decoded = decode(resp.jws);
            console.log(decoded);
            return decoded;
        });
}

export function validateToken(token) {
    const encoded = getEncodedToken(token);
    return fetch('http://127.0.0.1:5000/tokens/validate', {
        method: 'POST',
        body: encoded
    }).then(r => r.json())
      .then(resp => {
          return decode(resp.jws);
      });
}