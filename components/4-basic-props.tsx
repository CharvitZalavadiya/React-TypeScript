type GreetBasicProps = {
  name: string;
  msg: number;
  isLoggedIn: boolean;
};

export const BasicPropsGreet = (props: GreetBasicProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <p>
          Hello {props.name}! {props.msg} messages from Harshil
        </p>
      ) : (
        <p>Welcome Guest</p>
      )}
    </div>
  );
};
