type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[]
};

export const BasicPropsPersonList = (props: PersonListProps) => {
  return (
    <div>
        {
            props.name.map(name => {
                return (
                    <p key={name.first}>{name.first} {name.last}</p>
                )
            })
        }
    </div>
  );
};
