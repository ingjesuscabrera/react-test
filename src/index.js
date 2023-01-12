import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Alerts from "./pages/Alerts";
import Accordion  from "./pages/Accordion";
import Badges  from "./pages/Badges";
import Breadcrumbs from "./pages/Breadcrumbs";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="accordion" element={<Accordion/>} />
      <Route path="badges" element={<Badges/>} />
      <Route path="breadcrumbs" element={<Breadcrumbs/>} />
      <Route path="buttons" element={<Buttons/>} />
      <Route path="cards" element={<Cards/>} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
);

reportWebVitals();
