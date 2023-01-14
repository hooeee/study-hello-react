import { Stack } from "react-bootstrap";
import { ViewLayout } from "../molecules/ViewLayout";
import { DetailLabel } from "../molecules/DetailLabel";
export function ProjectAddAttributeSecond({
  ViewName,
  ViewLabelStyle,
  color1,
  color2,
  ViewLabelName1,
  ViewLabelName2,
  DetaillabelName1,
  DetaillabelName2,
  DetailLabelStyle1,
  DetailLabelStyle2
}) {
  return (
    <>
      <Stack>
        <ViewLayout
          ViewName={ViewName}
          labelStyle={ViewLabelStyle}
          color1={color1}
          color2={color2}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
        ></ViewLayout>
        <DetailLabel
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
          labelStyle1={DetailLabelStyle1}
          labelStyle2={DetailLabelStyle2}
        ></DetailLabel>
      </Stack>
    </>
  );
}
