import React, {ReactElement} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EntryDisplayPage from "./pages/EntryDisplayPage";
import NotFoundPage from "./pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): ReactElement {
  return <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pool/:poolName" element={<EntryDisplayPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  </BrowserRouter>;
}

export default App;
