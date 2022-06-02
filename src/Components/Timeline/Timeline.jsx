import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function TimelinePlot() {
  return (
    <div className="timeline">
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent maxWidth={"15%"}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="text.secondary">
            Payment received from John Doe of $385.90
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent maxWidth={"15%"}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="text.secondary">
            Project Meeting
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent maxWidth={"15%"}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="text.secondary">
            New sale recorded #ML-3467
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent maxWidth={"15%"}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="text.secondary">
            Payment was made of $64.95 to Michael Anderson
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent maxWidth={"15%"}>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="text.secondary">
            New payment receipt created for Alphanso Golvo
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelinePlot;
