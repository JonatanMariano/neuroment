import AppRoutes from "./routes/routes";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      {/* Speed Insights para ter retornos sobre velocidade no Vercel */}
      <SpeedInsights />

      <AppRoutes />
    </>
  );
}

export default App;
