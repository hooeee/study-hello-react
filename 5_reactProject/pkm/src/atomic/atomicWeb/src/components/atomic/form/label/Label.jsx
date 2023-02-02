export function Label({ children, color, size }) {
  const sizePx = size + "px";
  return <label style={{ color: color, size: sizePx }}>{children}</label>;
}
