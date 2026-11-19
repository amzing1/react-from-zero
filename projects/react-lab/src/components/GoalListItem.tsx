import { memo } from "react";
import type { GoalItem } from "../types";

interface Props {
  item: GoalItem;
}
const GoalListItem = ({ item }: Props) => {
  console.log("[render] GoalListItem");
  return (
    <div>
      <span>title: {item.title}</span>
      <span>done: {item.done ? "true" : "false"}</span>
    </div>
  );
};

export default memo(GoalListItem);
