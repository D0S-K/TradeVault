export default function Calendar() {
  return (
    <div
      style={{
        background: "#0b0f1a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>📅 Calendario Trading</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 80px)",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <div style={{ background: "#22c55e", padding: "20px" }}>1</div>
        <div style={{ background: "#22c55e", padding: "20px" }}>2</div>
        <div style={{ background: "#ef4444", padding: "20px" }}>3</div>
        <div style={{ background: "#22c55e", padding: "20px" }}>4</div>
        <div style={{ background: "#22c55e", padding: "20px" }}>5</div>
        <div style={{ background: "#ef4444", padding: "20px" }}>6</div>
        <div style={{ background: "#22c55e", padding: "20px" }}>7</div>
      </div>
    </div>
  );
}