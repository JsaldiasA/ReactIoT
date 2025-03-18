import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';


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
  

    return (<>

        <Container ><div style={{

            margin: "10px",
            padding: "10px",



        }} >  <h1>Devices</h1>
        </div>

        </Container>
    </>
    )
}

export default Devices
