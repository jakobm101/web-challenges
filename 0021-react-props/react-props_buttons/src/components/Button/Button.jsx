export default function Button({ children, color, disabled }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {children}
    </button>
  );
}
