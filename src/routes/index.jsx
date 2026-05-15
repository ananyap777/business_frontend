import { Routes } from "react-router-dom";
import PublicRoutes from "./public.route";
import AdminRoutes from "./admin.route";
import VendorRoutes from "./vendor.route";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes()}
      {AdminRoutes()}
      {VendorRoutes()}
    </Routes>
  );
};

export default AppRoutes;