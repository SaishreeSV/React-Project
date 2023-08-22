import React from "react";
import "./Styles/Timeline.css"; 

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <span className="timeline-date">{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
