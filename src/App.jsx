import AppRoutes from "./routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import RouteSeo from "./components/common/RouteSeo";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      <RouteSeo />
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
