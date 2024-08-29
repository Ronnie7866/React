import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/Fetchitems.jsx";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner.jsx";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
