import { Stack } from "react-bootstrap";
import { ViewLayout } from "../molecules/ViewLayout";
import { DetailLabel } from "../molecules/DetailLabel";
export function ProjectAddAttributeSecond({
  ViewName,
  color1,
  color2,
  ViewLabelName1,
  ViewLabelName2,
  DetaillabelName1,
  DetaillabelName2,
}) {
  return (
    <>
      <Stack>
        <ViewLayout
          ViewName={ViewName}
          color1={color1}
          color2={color2}
          ViewLabelName1={ViewLabelName1}
          ViewLabelName2={ViewLabelName2}
        ></ViewLayout>
        <DetailLabel
          DetaillabelName1={DetaillabelName1}
          DetaillabelName2={DetaillabelName2}
        ></DetailLabel>
      </Stack>
    </>
  );
}
