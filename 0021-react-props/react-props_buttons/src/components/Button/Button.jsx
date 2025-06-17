export default function Button({ color, disabled, children }) {
  const handleClick = () => {
    console.log("my choice");
  };
  return (
    <button style={{ color: color }} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
}
