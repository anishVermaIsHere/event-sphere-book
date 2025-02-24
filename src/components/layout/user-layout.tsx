import { Toaster } from "react-hot-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainContainer from "../common/main";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/route-links"


const { EVENTS, BOOKINGS } = ROUTES;
const UserLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
        <MainContainer classes="mx-auto max-w-screen-2xl">
          <Tabs defaultValue={pathname.slice(1)} className="w-full lg:p-4">
            <TabsList className="w-full bg-[none]">
              <NavLink to={BOOKINGS}>
                <TabsTrigger value="bookings" className="text-lg">Bookings</TabsTrigger>
              </NavLink>
              <NavLink to={EVENTS}>
                <TabsTrigger value="events" className="text-lg">Events</TabsTrigger>
              </NavLink>
            </TabsList>
            <Outlet />
          </Tabs>
          <Toaster />
        </MainContainer>
    </>
  );
};

export default UserLayout;
