import React from "react";
import moment from "moment";


const Event = (props) => (
    <div className="single-event">
        { moment.utc(props.event.date).format("MMMM D, YYYY") } | { props.event.time } | { props.event.location } | { props.event.type }
        <br/>
        Triggers: { props.event.triggers } <br/>
        Medication: { props.event.medication } <br/>
        Notes: { props.event.notes }
    </div>
)

export default Event