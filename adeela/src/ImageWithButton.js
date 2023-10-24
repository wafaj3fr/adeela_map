export default function ImageWithButton({ imageSrc, buttonText, onClick }) {
  return (
    <div style={{ position: "relative" }}>
      <img src={imageSrc} alt="" style={{ width: "100%" }} />
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
