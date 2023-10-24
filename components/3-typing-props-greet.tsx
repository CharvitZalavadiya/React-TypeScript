type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <p>Hello {props.name}!</p>
    </div>
  );
};
