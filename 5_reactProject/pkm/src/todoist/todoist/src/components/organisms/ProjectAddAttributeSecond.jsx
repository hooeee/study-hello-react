import { Stack,Container } from "react-bootstrap";
import { ViewLayout } from "../molecules/ViewLayout";
import { DetailLabel } from "../molecules/DetailLabel";
export function ProjectAddAttributeSecond({
  ViewName,
  ViewLabelStyle,
  color1,
  color2,
  checkboxId1,
  checkboxId2,
  ViewLabelName1,
  ViewLabelName2,
  checkedFlag1,
  checkedFlag2,
  DetaillabelName1,
  DetaillabelName2,
  DetailLabelStyle1,
  DetailLabelStyle2,
  changeChecked1,
  changeChecked2,
}) {
  return (
    <>
    <Container className="border-bottom">
      <Stack>
        <ViewLayout
          ViewName={ViewName}
          labelStyle={ViewLabelStyle}
          color1={color1}
          color2={color2}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
          checkboxId1={checkboxId1}
          checkboxId2={checkboxId2}
          checkedFlag1={checkedFlag1}
          checkedFlag2={checkedFlag2}
          changeChecked1={changeChecked1}
          changeChecked2={changeChecked2}
        ></ViewLayout>
        <DetailLabel
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
          labelStyle1={DetailLabelStyle1}
          labelStyle2={DetailLabelStyle2}
        ></DetailLabel>
      </Stack>
      </Container>
    </>
  );
}
