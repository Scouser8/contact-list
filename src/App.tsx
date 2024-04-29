import "./App.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import NewContactForm from "./components/NewContactForm";
import ContactProfile from "./components/ContactProfile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Provider store={store}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              minHeight: "50vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact/:contactId" element={<ContactProfile />} />
              <Route path="/contact:contactId/edit" element={<Home />} />
              <Route path="/contact/new" element={<NewContactForm />} />
            </Routes>
          </Box>
        </Provider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
