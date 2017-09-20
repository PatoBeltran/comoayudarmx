import * as React from 'react';
import { Link } from 'react-router-dom';

export class MainHeader extends React.Component<any, any> {
  render() {
    return (
        <header className="mainHeader">
          <div className="container">
            <h2 className="logo"><Link to="/">¿Como Ayudar?</Link></h2>
            <nav className="mainNav">
              <a className="modal__link" href="#" onClick={ () => this.props.show_about() } >Acerca de</a>
              <Link className="hide-mobile" to="/contact">Contactos de Emergencia</Link>
              <Link className="hide-mobile" to="/volunteer">Voluntarios</Link>
              <a className="hide-mobile" href="https://github.com/eldelentes/comoayudarmx" target="_blank">Contribuir <i className="fa fa-github"></i></a>
            </nav>
          </div>
        </header>
    );
  }
}
