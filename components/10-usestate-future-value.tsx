import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const FutureValueUser = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "CZ",
      email: "CZ@demo.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Name is : {user?.name}</div>
      <div>Email is : {user?.email}</div>
    </div>
  );
};

export default FutureValueUser;
