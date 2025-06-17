export default function Button({ color, disabled, children    }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={() => { console.log('my choice');
    }}>
      {children}
    </button>
  );
}
