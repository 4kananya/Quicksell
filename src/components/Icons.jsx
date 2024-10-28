import { ReactComponent as UrgentIcon } from "../icons/urgent_priority_colour.svg";
import { ReactComponent as HighPriority } from "../icons/high_priority.svg";
import { ReactComponent as MediumPriority } from "../icons/medium_priority.svg";
import { ReactComponent as LowPriority } from "../icons/low_priority.svg";
import { ReactComponent as NoPriority } from "../icons/no_priority.svg";
import { ReactComponent as Backlog } from "../icons/backlog.svg";
import { ReactComponent as Done } from "../icons/done.svg";
import { ReactComponent as InProgress } from "../icons/in_progress.svg";
import { ReactComponent as ToDo } from "../icons/to_do.svg";
import { ReactComponent as Cancel } from "../icons/cancelled.svg";

export const priorityIcons = (priority) => { 
  if (priority === 4 || priority === "Urgent") {
    return <UrgentIcon style={{ color: "red"  , marginRight: "12px"}} />
  }
  if (priority === 3 || priority === "High") {
    return <HighPriority style={{ color: "#666" , marginRight: "12px" }} />;
  }
  if (priority === 2 || priority === "Medium") {
    return <MediumPriority style={{ color: "#666"  , marginRight: "12px"}} />;
  }
  if (priority === 1 || priority === "Low") {
    return <LowPriority style={{ color: "#666"  , marginRight: "12px"}} />;
  }
  if (priority === 0 || priority === "No Priority") {
    return  <NoPriority style={{ color: "#666"  , marginRight: "12px" }} />;
  }  
};

export const progressIcons = (progress) => {
  switch (progress) {
    case "Backlog":
    return <Backlog style={{ color: "#666"  , marginRight: "12px" }} />;
    case "Done":
    return <Done style={{ color: "blue"  , marginRight: "12px"}} />;
    case "In progress":
    return <InProgress style={{ color: "#EFEF00"  , marginRight: "12px" }} />;
    case "Todo":
    return <ToDo style={{ color: "#ddd" , marginRight: "12px"}} />;
    default:
    return <Cancel style={{ color: "#666"  , marginRight: "12px"}} />;
  }
};
