import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  console.log(currentUser, " this is user");
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/"} />;
};
