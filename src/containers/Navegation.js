import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import { clearUser, clearToken } from "../redux/actions";

function Navegation(props) {
  const signOut = () => {
    props.clearToken();
    props.clearUser();
  };

  return (
    <div>
      <NavBar
        idRol={props.user.idRole}
        userName={props.user.userName}
        signOut={signOut}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user
  };
};

const mapDispatchToProps = {
  clearUser,
  clearToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Navegation);
