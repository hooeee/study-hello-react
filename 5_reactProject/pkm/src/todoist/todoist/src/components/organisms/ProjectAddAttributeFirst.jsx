import { Stack } from "react-bootstrap";
import { NameInput } from "./../molecules/NameInput";
import { ColorInput } from "../molecules/ColorInput";
import { FavoriteCheck } from "../molecules/FavoriteCheck";

export function ProjectAddAttributeFirst({
  NameLabelName,
  NameLabelStyle,
  NameInputStyle,
  ColorLabelName,
  ColorLabelStyle,
  ColorSelectStyle,
  FavoriteLabelName,
  items,
}) {
  return (
    <>
      <Stack>
        <NameInput labelName={NameLabelName} labelStyle={NameLabelStyle} inputStyle={NameInputStyle}></NameInput>
        <ColorInput labelName={ColorLabelName} items={items} labelStyle={ColorLabelStyle} selectStyle={ColorSelectStyle}></ColorInput>
        <FavoriteCheck labelName={FavoriteLabelName}></FavoriteCheck>
      </Stack>
    </>
  );
}
