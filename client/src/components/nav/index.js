import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { CURRENT_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import logo from "../../logo.png";

function NavBar(props) {

    const [state, dispatch] = useStoreContext();


    const getUser = () => {
        dispatch({ type: LOADING });
        console.log(state.currentUser.loggedIn)
        API.getUser(state.currentUser._id)
            .then(results => {
                dispatch({
                    type: CURRENT_USER,
                    user: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link active" href="#">Home */}
                            <Link className="nav-link active" to="/"> Home</Link>

                                <span className="visually-hidden">(current)</span>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        {state.currentUser.loggedIn ? (
                            <li className="nav-item">
                                <a className="nav-link" href="/logout" onClick={props.logout}>Login</a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Logout</a>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
