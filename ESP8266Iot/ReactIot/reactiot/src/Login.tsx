import { useState , useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import { Container } from 'react-bootstrap';
//import './Content.css';


import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [UserName, setUser] = useState("");
    const [Password, setPass] = useState("");

    const [isLogged, setIsLogged] = useState(false);

    const token = localStorage.getItem('token')

    useEffect(() => {
        !!token ? setIsLogged(true) : setIsLogged(false);

        console.log(isLogged);
        console.log(token);
    }, []);
    const navigate = useNavigate();
    const Thankyou = () => {
        


        
        navigate("/", { replace: true });
        window.location.reload()
        

    };
       

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

   

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("http://javiersaldias.zapto.org:50001/api/Login", {
            method: "POST",
            body: JSON.stringify({
                UserName,
                Password,
            }),
            headers: { "Content-type": "application/json" }
        }).then(res => {
            if (res.status === 401) {
                toast.error("Username and/or password is incorrect", {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                    theme: "dark",
                });
            } else if (!res.ok) {
                toast.error("A server error ocurred", {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                    theme: "dark",
                });
            } else {
                return res.json();
            }
            return null;
        }).then(content => {

            if (content) {
                /*     AsyncStorage.setItem("token", content.token).then(() => window.location.href = "/");*/
                
                toast("LOGIN Succecs Redirected in 5 sec")
                localStorage.setItem("token", JSON.stringify(content.token))
                Thankyou()
            }
            
        }).catch(e => {
            console.error(e);

            toast.error("A connection error ocurred", {
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
                theme: "dark",
            });
        })
    }

    return (
        <> <Container>           <ToastContainer />
            {!isLogged ? <>

            <form style={{
                display: "flex",
                flexDirection: 'column',
                    gap: '20px',
                    placeItems: 'center'
            }} onSubmit={handleLogin}>
                <label>Username:</label>
                <input
                    type="text"
                        name="user"
                        value={UserName}
                    onChange={e => setUser(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="pass"
                    value={Password}
                    onChange={e => setPass(e.target.value)}
                />
                <button type="submit">Login</button>
                </form>
            </> : <>
                    <button onClick={logout}>Logout</button>
            </>}
        </Container> 
        </>
    );
}
