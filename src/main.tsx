import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </StrictMode>,
);
