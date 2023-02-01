export function Icon({ iconName, iconColor, iconSize }) {
  const sizePx = iconSize + "px";
  return (
    <span
      style={{ fontSize: sizePx, color: iconColor }}
      class="material-symbols-outlined"
    >
      {iconName}
    </span>
  );
}
