import React, { useState } from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  let formattedMinutes = String(minutes).padStart(2, "0");

  return (
    <div>
      {day}, {hour}:{formattedMinutes}
    </div>
  );
}
