import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Registration from "./components/User/Registration";
import Login from "./components/User/Login";
import Home from "./pages/Home";
import { setUser, setTokens } from "./feature/authSlice";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  useEffect(() => {
    if (!user || !accessToken || !refreshToken) {
      // Tokens not found, redirect to login page
      dispatch(setUser(null));
      dispatch(setTokens({ accessToken: null, refreshToken: null }));
    }
  }, [user, accessToken, refreshToken, dispatch]);

  return user && accessToken && refreshToken ? (
    <Outlet/>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Clear user and tokens on app load
  //   dispatch(clearUser());
  //   dispatch(clearTokens());
  // }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
