import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/pages/notFound.css'
import Header from '../components/molecules/Header';

function NotFound() {
  return (
    <div className="notfound">
      <Container className="my-5">
        <Header />
        <h1>Página no encontrada</h1>
        <p>¿Estás seguro de que era aquí?</p>
      </Container>
    </div>
  );
}

export default NotFound;