import { Button, Icon } from "@components/atomic";

export function IconButton({ children, clickEvent, color, iconName, size }) {
  return (
    <Button clickEvent={clickEvent}>
      <Icon iconName={iconName} iconSize={size} iconColor={color} />
      {children}
    </Button>
  );
}
