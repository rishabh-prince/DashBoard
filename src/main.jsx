import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OrderContext } from "./Context/OrderContext.jsx";
import { orders } from "./Context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <OrderContext.Provider value={orders}>
    <App />
  </OrderContext.Provider>
);
