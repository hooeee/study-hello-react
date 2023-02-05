export function Icon({ iconName, color, size }) {
  const sizePx = size + "px";
  return (
    <span
      style={{ fontSize: sizePx, color: color }}
      class="material-symbols-outlined"
    >
      {iconName}
    </span>
  );
}
