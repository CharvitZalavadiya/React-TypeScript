import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const AssertionUser = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "CZ",
      email: "CZ@demo.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>Name is : {user.name}</div>
      <div>Email is : {user.email}</div>
    </div>
  );
};

export default AssertionUser;
