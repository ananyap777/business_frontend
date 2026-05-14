import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./public.route";
import AdminRoutes from "./admin.route";
import VendorRoutes from "./vendor.route";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoutes}
      {AdminRoutes}
      {VendorRoutes}

      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;