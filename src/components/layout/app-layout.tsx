import { Outlet } from "react-router-dom";
import MainContainer from "../common/main";
import Navbar from "../navbar";
import Footer from "./footer";
import { AxiosInterceptor } from "@/services/axios-interceptor";
import QueryProvider from "../query-provider";

const AppLayout = () => {
  return (
    <AxiosInterceptor>
      <QueryProvider>
        <div className="mx-auto max-w-screen-2xl">
          <Navbar />
          <MainContainer>
            <Outlet />
          </MainContainer>
          <Footer />
        </div>
      </QueryProvider>
    </AxiosInterceptor>
  );
};

export default AppLayout;
