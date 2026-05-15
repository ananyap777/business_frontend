import AppRoutes from "./routes";
import Navbar from "./components/common/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;