import { Toaster } from "react-hot-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainContainer from "../common/main";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "@/routes/route-links"


const { EVENTS, BOOKINGS } = ROUTES;
const UserLayout = () => {
  const { pathname } = useLocation();
  const defaultTabValue = pathname.split('/')[2];

  return (
    <>
        <MainContainer classes="mx-auto max-w-screen-2xl">
          <Tabs defaultValue={defaultTabValue} className="w-full lg:p-4">
            <TabsList className="w-full bg-[none]">
              <NavLink to={BOOKINGS}>
                <TabsTrigger value="bookings" className="text-md">Bookings</TabsTrigger>
              </NavLink>
              <NavLink to={EVENTS}>
                <TabsTrigger value="events" className="text-md">Events</TabsTrigger>
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
