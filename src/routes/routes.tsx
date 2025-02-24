import { Suspense } from "react";
import { ROUTES } from "./route-links";
import {
  Events,
  LoginPage,
  PageNotFound,
  ProtectedPage,
  AppLayout,
  UserLayout,
  HomePage
} from "./lazy-components";
import Spinner from "@/components/ui/spinner"; 

const {
  HOME,
  LOGIN,
  EVENTS,
  EVENT,
  BOOKINGS
} = ROUTES;


const appRoutes = [
  {
    element: <ProtectedPage element={<AppLayout />}/>,
    children: [
      {
        path: HOME,
        element: (
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: LOGIN,
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <PageNotFound />
          </Suspense>
        ),
      },
      {
        element: <ProtectedPage element={<UserLayout />} />,
        children: [
          {
            path: BOOKINGS,
            element: (
              <Suspense fallback={<Spinner />}>
                Booking page
              </Suspense>
            ),
          },
          {
            path: EVENTS,
            element: (
              <Suspense fallback={<Spinner />}>
                <Events />
              </Suspense>
            ),
          },
          {
            path: EVENT,
            element: (
              <Suspense fallback={<Spinner />}>
                {/* <Event /> */}
              </Suspense>
            )
          }
        ],
      },
    ],
  },
];

export default appRoutes;