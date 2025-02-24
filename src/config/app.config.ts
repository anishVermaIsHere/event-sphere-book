

const AppConfig = {
    appName: import.meta.env.VITE_APP_NAME!,
    baseUrl: import.meta.env.VITE_BASE_URL!,
    oAuth: {
        clientId: import.meta.env.VIE_GOOGLE_OAUTH_CLIENT_ID!,
        clientSecret: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_SECRET!
    },
    authSecret: import.meta.env.VITE_AUTH_SECRET!,
    logoUrl: "https://res.cloudinary.com/dnyp1e0zo/image/upload/v1738675226/event-sphere/ob57lkpaqcernkdykuii.png"
};

export default AppConfig;
