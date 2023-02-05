import React from "react";

const Header = (props) => {
  const {authenticated, handleNotAuthenticated} = props;

  const handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open(process.env.REACT_APP_SERVER_URL + "/auth/github", "_self");
  };

  const handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open(process.env.REACT_APP_SERVER_URL + "/auth/logout", "_self");
    handleNotAuthenticated();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Home</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {authenticated ? (
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogoutClick}>Logout</button>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={handleSignInClick}>Login with Github</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;