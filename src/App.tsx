import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeRoutes from "./Components/AllRoutes/HomeRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./utils/ScrollToTop";

const myClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={myClient}>
        <ScrollToTop>
          <HomeRoutes />
        </ScrollToTop>
      </QueryClientProvider>
    </div>
  );
}

export default App;
