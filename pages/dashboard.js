export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        background: "#0b0f1a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "220px",
          background: "#141b2d",
          padding: "20px",
        }}
      >
        <h2>📊 TradeVault</h2>

        <a href="/dashboard" style={{ color: "white", display: "block", margin: "15px 0" }}>
          🏠 Dashboard
        </a>

        <a href="/calendar" style={{ color: "white", display: "block", margin: "15px 0" }}>
          📅 Calendario
        </a>

        <a href="/journal" style={{ color: "white", display: "block", margin: "15px 0" }}>
          📖 Diario
        </a>

        <a href="/trades" style={{ color: "white", display: "block", margin: "15px 0" }}>
          📊 Operaciones
        </a>
      </div>

      <div style={{ flex: 1, padding: "40px" }}>
        <h1>📈 TradeVault Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={{ background: "#141b2d", padding: "20px", borderRadius: "12px" }}>
            <h3>Balance</h3>
            <h2>10.000 €</h2>
          </div>

          <div style={{ background: "#141b2d", padding: "20px", borderRadius: "12px" }}>
            <h3>PnL Hoy</h3>
            <h2 style={{ color: "#22c55e" }}>+250 €</h2>
          </div>

          <div style={{ background: "#141b2d", padding: "20px", borderRadius: "12px" }}>
            <h3>Win Rate</h3>
            <h2>68%</h2>
          </div>

          <div style={{ background: "#141b2d", padding: "20px", borderRadius: "12px" }}>
            <h3>Riesgo</h3>
            <h2>1%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}