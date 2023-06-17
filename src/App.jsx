import React, { Fragment } from 'react';
import "./App.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import MainPage from "pages/Main";
import ServicesPage from "pages/Services";
import AboutPage from "pages/About";
import ContactPage from "pages/Contact";
import CarsPage from "pages/Cars";
import ManufacturersPage from 'pages/Manufacturers';
import RepairsPage from 'pages/Repairs';
import NotFoundPage from 'pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotMenu from "components/BotMenu";

export default function Name(props) {

  return (
    <Router>
      <Fragment>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/repairs" element={<RepairsPage />} />
          <Route path="/cars/:car/:model" element={<CarsPage />} />
          <Route path="/manufacturers/:manufacturer" element={<ManufacturersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BotMenu></BotMenu>
        <Footer></Footer>
      </Fragment>
    </Router>
  );
}