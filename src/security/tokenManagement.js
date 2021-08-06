import launchTask from "../timer/timer";
import {validateToken} from "../api/api";
import {encode} from "./jwt";

const task = (token) => {
    return validateToken(token)
        .then(body => {
            if(body.sub !== "OK") {
                console.log("Token is not valid anymore");
                throw body.sub;
            }
        });
}
const onTokenValid = () => console.log("Token is still valid");

export default function validateTokenPeriodically(token, interval, onFail) {
    launchTask(() => task(token), interval, onTokenValid, onFail);
}

export function getEncodedToken(token) {
    return encode({sub: token, appId: "fruit-ninja"});
}