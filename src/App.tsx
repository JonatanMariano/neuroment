import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./stores/StoreProvider";
import AppRoutes from "./routes/Routes";
import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </BrowserRouter>
  );
}