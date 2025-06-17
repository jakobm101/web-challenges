export default function Button({ color, disabled, children, onClickProp }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClickProp}>
      {children}
    </button>
  );
}
