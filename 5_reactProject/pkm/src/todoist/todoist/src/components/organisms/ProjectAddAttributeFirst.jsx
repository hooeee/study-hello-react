import { Stack } from "react-bootstrap";
import { NameInput } from "./../molecules/NameInput";
import { ColorInput } from "../molecules/ColorInput";
import { FavoriteCheck } from "../molecules/FavoriteCheck";

export function ProjectAddAttributeFirst({
  NameLabelName,
  ColorLabelName,
  FavoriteLabelName,
  items,
}) {
  return (
    <>
      <Stack>
        <NameInput labelName={NameLabelName}></NameInput>
        <ColorInput labelName={ColorLabelName} items={items}></ColorInput>
        <FavoriteCheck labelName={FavoriteLabelName}></FavoriteCheck>
      </Stack>
    </>
  );
}
