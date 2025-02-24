
export const ROUTES = {
  /* pubic routes */
  HOME: "/",
  LOGIN: "/login",
  ABOUT: "/about",
  RECOVER_ACC: "/recover",
  RESET_PWD: "/resetpassword",

  /* protected routes */
  LOGOUT: "logout",
  BOOKINGS: 'user/bookings',
  EVENTS: "user/events",
  EVENT: "user/events/:id",
  ATTENDEES: "user/attendees",
  ATTENDEE: "user/attendees/:slug",
};
