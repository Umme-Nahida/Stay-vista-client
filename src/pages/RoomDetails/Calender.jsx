import React from "react";
import { DateRange } from "react-date-range";
import { useState } from "react";

const Calender = ({ room }) => {
  console.log(room);
  const [state, setState] = useState([
    {
      startDate: room.from ? new Date(room.from) : new Date() ,
      endDate: room.to ? new Date(room.to) : new Date(),
      key: "selection",
    },
  ]);
  console.log(state)
  return (
    <DateRange
      editableDateInputs={true}
      onChange={item => setState([item.selection])}
      moveRangeOnFirstSelection={true}
      ranges={state}
    />
  );
};

export default Calender;
