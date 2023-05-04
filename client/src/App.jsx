import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Lodge from "./pages/Lodge/index";
import SingleRoom from "./pages/Lodge/SingleRoom";
import Rooms from "./pages/Lodge/Rooms";
import Hotels from "./pages/Lodge/Hotels";
import ConfirmReservation from "./pages/Lodge/ConfirmReservation";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Index from "./pages/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="lodge" element={<Layout />}>
          <Route index element={<Lodge />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<SingleRoom />} />
          <Route path="rooms/:id/confirm" element={<ConfirmReservation />} />
          <Route path="hotels" element={<Hotels />} />
        </Route>
        <Route path="" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="admin" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
