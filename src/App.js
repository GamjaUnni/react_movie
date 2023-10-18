import { useEffect, useState } from "react";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins!({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((v, i) => (
                    <li key={v.id}>{v.name} (v.symbol)</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
