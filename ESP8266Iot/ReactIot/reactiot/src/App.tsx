import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
    return (

        <div className="App">
        <header className="App-header">


        <form style={{
            display: "flex",
            flexDirection: 'column',
            gap: '20px',
        }}>
            <label>Username:</label>
            <input
                type="text"
                name="user"


            />
            <label>Password:</label>
            <input
                type="password"
                name="pass"


            />
            <button type="submit">Login</button>
        </form>

            </header>
        </div>

    );
        
  
}

export default App
