import * as React from 'react';
import { MainHeader } from '../components/header'
import { Intro } from '../components/intro'
import { CardItem } from '../components/cardItem'

const contacts = [
  {
    title: 'Protección Civil CDMX',
    phone: '56832222',
    location: 'CDMX',
    moreInfo: 'http://www.proteccioncivil.cdmx.gob.mx/'
  },
  {
    title: 'Emergencias',
    phone: '911',
    location: 'Todo México',
    moreInfo: 'https://www.gob.mx/911'
  },
  {
    title: 'Locatel CDMX',
    phone: '56581111',
    location: 'CDMX',
    moreInfo: 'http://locatel.cdmx.gob.mx/'
  },
  {
    title: 'IMSS',
    phone: '018006232323',
    location: 'Todo México',
    moreInfo: 'https://twitter.com/Tu_IMSS/status/910354479207337984'
  },
  {
    title: 'Cruz Roja',
    phone: '5555575757',
    location: 'CDMX',
    moreInfo: '#'
  }
];

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Intro />
        <section className="cards" id="cards">
        <div className="cards__intro">
          <h3>Contactos de Emergencia</h3>
          <p>A continuación encontrarás una lista de contactos que te podrán ser útiles si te encuentras en un área afectada por el sismo.</p>
          <p>Si cónoces algun otro contacto importante <a className="modal__link" data-modal="new" href="#">Contáctanos</a></p>
        </div>
        <div className="container">
          {contacts.map((contact, index) => (
            <CardItem
              key={index}
              title={contact.title}
              phone={contact.phone}
              location={contact.location}
              moreInfo={contact.moreInfo}
              description={'d'}
              type={'Phone'}
            />
            )
          )}
        </div>
      </section>
    </div>
    );
  }
}
