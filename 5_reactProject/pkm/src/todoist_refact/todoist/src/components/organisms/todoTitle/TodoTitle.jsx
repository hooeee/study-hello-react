import { IconButton, TitleButton } from "@components/molecules";

export function TodoTitle({ name }) {
  return (
    <div>
      <TitleButton
        fontSize={"50px"}
        name={name}
        color={"#808080"}
      >
        <IconButton iconName={"mode_comment"} color={"#808080"} />
        <IconButton iconName={"person_add"} color={"#808080"} />
        <IconButton iconName={"tune"} color={"#808080"} />
        <IconButton iconName={"more_horiz"} color={"#808080"} />
      </TitleButton>
    </div>
  );
}
