export default function Home() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>📈 TradeVault</h1>

      <h2>Balance</h2>
      <p>10,000 €</p>

      <h2>Beneficio de hoy</h2>
      <p style={{ color: "#22c55e" }}>+250 €</p>

      <h2>Riesgo</h2>
      <p>1%</p>

      <h2>Win Rate</h2>
      <p>68%</p>
    </div>
  );
}