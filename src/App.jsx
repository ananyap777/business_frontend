import AppRoutes from "./routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import RouteSeo from "./components/common/RouteSeo";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="app-shell min-h-screen bg-[#F9FAFB] text-[#1F2937]">
        <RouteSeo />
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
