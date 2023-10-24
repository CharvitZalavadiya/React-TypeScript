type StatusProps = {
  status: "loading" | "success" | "error";
};

const AdvancePropsStatus = (props: StatusProps) => {
  let msg;
  if (props.status === "loading") msg = "Loading ...";
  else if (props.status === "success") msg = "Data fetched SuccessFully (●'◡'●)";
  if (props.status === "error") msg = "Can't get the Data !";
  return <div>
    status : {msg}
  </div>;
};

export default AdvancePropsStatus;
