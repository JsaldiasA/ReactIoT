import { useState, useEffect } from "react";



import { useNavigate } from 'react-router-dom';


function Devices() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const [isLogged, setIsLogged] = useState(false);

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const notLogged = () => {
        navigate("/", { replace: true });
        window.location.reload();
    }

    useEffect(() => {
        !!token ? console.log("logged") : notLogged();

     
    }, []);
  

    return (

        <h1>Device 1</h1>

    )
}

export default Devices
