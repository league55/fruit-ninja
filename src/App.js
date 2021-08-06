import './App.css';
import {useState} from "react";
import {redeemToken} from "./api/api";
import validateTokenPeriodically from "./security/tokenManagement";

function App() {
  const [token, setToken] = useState("");
  const [tokenOK, setTokenOK] = useState(false);
  const [failReason, setFailReason] = useState('');

  function handleRedeemToken() {
    return redeemToken(token).then(response => {
        if(response.sub === "OK") {
            setTokenOK(true);
            setFailReason('');
            validateTokenPeriodically(token,  5000, (reason) => {
                setFailReason(reason);
                setTokenOK(false);
            });
        } else {
            setFailReason(response.sub);
        }
    });
  }

  const handleTokenChange = (e) => {
      setToken(e.target.value);
  }

  return (
    <div className="App">
        {!tokenOK &&
          <div className={"licensing"}>
              <div>
                    <span>Token: </span>
                    <input type="text" value={token} onChange={handleTokenChange}/>
                    <button onClick={handleRedeemToken}>Submit</button>
                      {failReason && <p>{failReason}</p>}
              </div>
          </div>}
        {tokenOK && <div className={"game"}>
            <iframe src="https://league55.github.io/FruitNinjaClone/"
                    allow="camera *;"
                    title="Game"/>
        </div>}

    </div>
  );
};

export default App;
