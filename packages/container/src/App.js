import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Button, Container, Row, Col, Nav, Card } from '@edx/paragon';

import Header from './components/Header';
import Footer from './components/Footer';
import EnterpriseBanner from './components/EnterpriseBanner';
import DashboardApp from './components/DashboardApp';
import SearchApp from './components/SearchApp';
import AdminApp from './components/AdminApp';

import './App.scss';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="content">
        <EnterpriseBanner />
        <Switch>
          <Route exact path="/" component={DashboardApp} />
          <Route path="/search" component={SearchApp} />
          <Route path="/admin" component={AdminApp} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
