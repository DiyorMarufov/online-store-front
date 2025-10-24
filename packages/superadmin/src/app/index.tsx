import { AppProvider } from "./providers";
import { Router } from "./router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
