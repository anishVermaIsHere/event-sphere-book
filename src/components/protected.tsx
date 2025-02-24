import { Navigate, useLocation, matchPath } from "react-router-dom";
import { ROUTES } from "../routes/route-links";
import useAuthStore from "../store/auth.store";
import { JSX } from "react";

const Protected = ({ element }: { element: JSX.Element }) => {
  const { RECOVER_ACC, RESET_PWD, LOGIN, EVENTS } = ROUTES;
  const location = useLocation();
  const { accessToken, user } = useAuthStore((state) => state);
  // const roles = ["admin","guest","speaker","user"];
  // const isAllowedRole = roles.includes(user?.role) ? true : false;
  const publicRoutes = ["/", LOGIN, RECOVER_ACC, RESET_PWD];
  const protectedRoutes = [`/user/:path*`];
  const isProtectedRoute = protectedRoutes.some((route) =>matchPath(route, location.pathname));
  const isPublicRoute = publicRoutes.some((route) =>matchPath(route, location.pathname));

  
  if (accessToken && isProtectedRoute || (!accessToken && isPublicRoute)) {
    return element;
  } 
  else if (!accessToken && isProtectedRoute) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (accessToken && isPublicRoute) {
    return <Navigate to={EVENTS} replace />;
  } else {
    return <Navigate to="/" />;
  }

  return element;
};

export default Protected;
