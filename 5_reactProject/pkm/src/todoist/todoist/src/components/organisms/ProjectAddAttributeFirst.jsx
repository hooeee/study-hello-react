import { Container, Stack } from "react-bootstrap";
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
  onChangeNameInputData,
  selectedColor,
}) {
  return (
    <>
      <Container>
        <Stack>
          <NameInput
            labelName={NameLabelName}
            labelStyle={NameLabelStyle}
            inputStyle={NameInputStyle}
            changeInputData={onChangeNameInputData}
          ></NameInput>
          <ColorInput
            labelName={ColorLabelName}
            labelStyle={ColorLabelStyle}
            selectStyle={ColorSelectStyle}
            selectedColor={selectedColor}
          ></ColorInput>
          <FavoriteCheck labelName={FavoriteLabelName}></FavoriteCheck>
        </Stack>
      </Container>
    </>
  );
}
