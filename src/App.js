import React, { useEffect } from "react";
import SignIn from "./components/signin/SignIn";
import AuthenticatedTemplate from "./components/authenticated-template/AuthenticatedTemplate";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "./actions";
import jwtDecode from "jwt-decode";
import "./App.css";

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  const token = localStorage.getItem('paraticaToken') || null;

  useEffect(()=>{
    if(token) {
      dispatch(loginSuccess({
        token,
        username: jwtDecode(token).sub,
        role: jwtDecode(token).role
      }))
    }
  },[dispatch, token]);
  
  return (
    <div className="App">{auth.isAuthenticated ? <AuthenticatedTemplate /> : <SignIn />}</div>
  );
}

export default App;
