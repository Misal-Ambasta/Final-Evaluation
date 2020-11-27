
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import Navbar from './Components/Navbar';
function App() {
    return (
        <div className="App">
            <Navbar />
            <PublicRoutes />
        </div>
    );
}

export default App;