import React from "react";

type InputProps = {
  value: string;
  handleInputChange: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const EventPropsInput = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  );
};

export default EventPropsInput;
