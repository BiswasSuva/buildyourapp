import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchuser } from "./redux/reducers/User";
import PublicRoutes from "./Routing/PublicRoutes";
import PrivateRoutes from "./Routing/PrivateRoutes";
// import '@sweetalert2/themes/dark/dark.scss';
import "./App.scss"
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const { loginStatus, loading,userData } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(fetchuser());

  }, []);

console.log("user",userData);

  if (loading) {
    return (
      <div id="cupcake" className="box">
        <span className="letter">L</span>
        <div className="cupcakeCircle box">
          <div className="cupcakeInner box">
            <div className="cupcakeCore box" />
          </div>
        </div>
        <span className="letter box">A</span>
        <span className="letter box">D</span>
        <span className="letter box">I</span>
        <span className="letter box">N</span>
        <span className="letter box">G</span>
      </div>
    );
  }
  return (
    <>
    <Toaster/>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(<Route path="*" element={<CheckingAuth />} />)
      )}
    />
    </>
  );
}

export default App;

function CheckingAuth() {
  const { loginStatus, loading } = useSelector((state) => state.User);

  if (!loginStatus) {
    return <PublicRoutes />;
  }
  return <PrivateRoutes />;
}
