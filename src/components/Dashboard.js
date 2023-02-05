import React, {useEffect, useState} from "react";
import Header from "./Header";

const Dashboard = () => {

  const [userState, setUserState] = useState({
    user: {},
    error: null,
    authenticated: false
  });

  const handleNotAuthenticated = () => {
    setUserState({userState, ...{authenticated: false}});
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/users/dashboard", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        console.log('dashboard response', response);
        if(response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        console.log('JSON response', responseJson);
        setUserState({
            authenticated: true,
            user: responseJson
          });
      })
      .catch(error => {
        setUserState({
          userState, ...{
            authenticated: false,
            error: "Failed to authenticate user"
          }
        });
      });
  }, []);

  console.log("userState", userState);

  return (
    <div>
      <Header
        authenticated={userState.authenticated}
        handleNotAuthenticated={handleNotAuthenticated}
      />

      <div className="container mt-5">


        {!userState.authenticated ? (
          <h1>You need to login first.</h1>
        ) : (
          <div className="card" style={{width: '18rem'}}>
            <img src={userState?.user?.photoPath} className="card-img-top" alt="Profile photo"/>
            <div className="card-body">
              <h5 className="card-title">{userState?.user?.name}</h5>
              <p className="card-text">{userState?.user?.email}</p>
              <a href={userState?.user?.profileUrl} className="btn btn-primary">View Profile</a>
            </div>
          </div>

        )}
      </div>


    </div>
  );
};

export default Dashboard;
