export default function Journal() {
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
      <h1>📖 Diario de Trading</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#141b2d",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>EURUSD</h2>

        <p>📅 Fecha: 14/11/2026</p>

        <p>📈 Tipo: Compra</p>

        <p>💰 Resultado: +120 €</p>

        <p>🎯 Setup: Breakout Londres</p>

        <p>🧠 Nota: Buena ejecución y gestión del riesgo.</p>
      </div>
    </div>
  );
}