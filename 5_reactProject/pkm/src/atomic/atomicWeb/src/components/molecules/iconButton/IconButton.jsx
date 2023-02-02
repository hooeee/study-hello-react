import { Button, Icon } from "@components/atomic";

export function IconButton({ children, clickEvent, color, iconName, size }) {
  return (
    <Button clickEvent={clickEvent}>
      <Icon iconName={iconName} size={size} color={color} />
      {children}
    </Button>
  );
}
