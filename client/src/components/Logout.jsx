import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const Logout = () => {
    const navigate = useNavigate();

    // perform the logout function
    useEffect(() => {
        authServices.logout()
            .then((response) => {
                alert(response.data.message);

                setTimeout(() => {
                    navigate("/login", { replace: true });
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            });

    }, []);

    return (
        <div>Logging out...</div>
    )
}

export default Logout;