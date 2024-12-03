import Footer from "./Footer";
import NavBar from "./NavBar";
import Products from "./Products";
import Sidebar from "./Sidebar";
import Top from "./Top";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Sidebar />
        <NavBar />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
