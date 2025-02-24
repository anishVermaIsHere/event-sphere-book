import { lazy } from "react";

const ProtectedPage = lazy(()=>import("../components/protected"));
const PageNotFound = lazy(()=>import('../pages/404'));
const HomePage = lazy(()=>import('../pages'));
const LoginPage = lazy(()=>import('../pages/Login'));
const Events = lazy(()=>import('../components/events'));
// const Attendees = lazy(()=>import('../components/admin/attendees'));
// const AttendeeDetails = lazy(()=>import('../components/admin/attendees/attendee-details'));
const AppErrorBoundary = lazy(()=>import('../components/error-boundary'));
const AppLayout = lazy(()=>import('../components/layout/app-layout'));
const UserLayout = lazy(()=>import('../components/layout/user-layout'));


export {
    ProtectedPage,
    PageNotFound,
    HomePage,
    LoginPage,
    Events,
    // Attendees,
    // AttendeeDetails,
    AppErrorBoundary,
    AppLayout,
    UserLayout
}