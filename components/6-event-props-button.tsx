import React from "react";

type ButtonProps = {
  //   handleClick: () => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const EventPropsButton = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};

export default EventPropsButton;
