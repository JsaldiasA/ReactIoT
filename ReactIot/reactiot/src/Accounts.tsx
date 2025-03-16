import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";


function Accounts() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const [isLogged, setIsLogged] = useState(false);

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const notLogged = () => {
        navigate("/", { replace: true });
        window.location.reload();
    }

    const [data, setData] = useState(null);

    function handleClick() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://javiersaldias.zapto.org:50001/api/User');
        xhr.onload = function () {
            if (xhr.status === 200) {
                setData(JSON.parse(xhr.responseText).map(
                    (data) => {
                        return (
                            <tr>
                                <td>{data.id} </td>
                                < td > {data.userName} </td>
                            </tr>
                        )
                    }
                ));

            }
        };
        xhr.send();
    }



    useEffect(() => {
        !!token ? console.log("logged") : notLogged();


    }, []);


    return (
        <>
            <div expand="lg" className="bg-body-tertiary"
                style={{
                    position: "static",
                    top: "0px",
                    
                    margin: "10px",
            
                }}  >

                <div style={{
                     position: "relative",
                    margin: "10px",
                    padding: "10px",
                    cursor: "pointer",
                    pointerEvents: "all",
                }} >
            <h1> Accounts </h1>

                </div>

            <div>
                <button onClick={handleClick}>Refresh</button>
                {data ?
                <div><table class="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>             
                    </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table></div> : <div>Loading...</div>}
            </div>
            </div>
        </>

   


    );
}

export default Accounts
