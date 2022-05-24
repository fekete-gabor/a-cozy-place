import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutUsPage,
  AllNewsPage,
  SingleNewsPage,
  SupportPage,
  AllAnimalsPage,
  SingleAnimalPage,
  ContactsPage,
  ErrorPage,
} from "./pages/index";
import { SharedLayout } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/gazdikereso" element={<AllAnimalsPage />} />
            <Route
              path="/gazdikereso/:type/:id"
              element={<SingleAnimalPage />}
            />
            <Route path="/tamogatas" element={<SupportPage />} />
            <Route path="/rolunk" element={<AboutUsPage />} />
            <Route path="/hirek" element={<AllNewsPage />} />
            <Route path="/hirek/:id" element={<SingleNewsPage />} />
            <Route path="/elerhetosegek" element={<ContactsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
