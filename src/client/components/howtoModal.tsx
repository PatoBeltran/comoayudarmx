import * as React from 'react';

interface IHowToModalProps {
    close: () => void,
    display: boolean
}

export class HowToModal extends React.Component<IHowToModalProps, any> {
  render() {
    return (
        <section className={`modal ${this.props.display ? 'show' : ''}`} data-modal="new">
          <a onClick={() => this.props.close() } className="modal__close">Cerrar</a>
          <div className="modal__container">
          <h2>Públicar Forma de Ayuda</h2>
          <p>Envía la información del método de ayuda con toda la información pertinente como: A quién se ayuda, Desde dónde se puede ayudar, que tipo de ayuda necesitan. desde los siguientes medios de contacto:</p>
          <a href="https://twitter.com/comoayudarmx" target="_blank" className="modal__button"><i className="fa fa-twitter"></i>@comoayudarmx</a> o <a className="modal__email" href="mailto:comoayudarmx@gmail.com">comoayudarmx@gmail.com</a>
        </div>
        </section>
    );
  }
}