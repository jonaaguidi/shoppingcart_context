import { Home } from "./Components/Home";
import { CartProvider } from "./Context/CartContext";
import "./App.css"



function App() {
    return (
        <CartProvider>
        <Home />
        </CartProvider>
    );
}

export default App;