import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [coinValue, setCoinValue] = useState("");
  const [affordableCoinCnt, setAffordableCoinCnt] = useState(0);

  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const onChangeSelect = (event) => {
    setCoinValue(event.target.value);
    console.log(coinValue);
    setAffordableCoinCnt(money / parseFloat(coinValue));
  };

  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      <span>I have</span>
      <input onChange={onChange}></input> <span>USD Dollars</span>
      <br></br>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChangeSelect} value={coinValue}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br></br>
      <h1>You can buy {affordableCoinCnt} coins</h1>
    </div>
  );
}

export default App;
