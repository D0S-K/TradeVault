export default function Trades() {
  return (
    <div
      style={{
        background: "#0b0f1a",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>📊 Mis Operaciones</h1>

      <div
        style={{
          background: "#141b2d",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>EURUSD</h2>
        <p>📅 Fecha: 14/11/2026</p>
        <p>📈 Compra</p>
        <p>💰 Resultado: +120 €</p>
      </div>

      <div
        style={{
          background: "#141b2d",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>NAS100</h2>
        <p>📅 Fecha: 13/11/2026</p>
        <p>📉 Venta</p>
        <p>💰 Resultado: -45 €</p>
      </div>
    </div>
  );
}