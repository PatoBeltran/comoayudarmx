import * as React from 'react';

interface ICardProps {
    title: string,
    description: string,
    type: string,
    location: string,
    moreInfo: string
}

export class CardItem extends React.Component<ICardProps, any> {
  render() {
    return (
        <article className="card">
            <h2 className="card__title">{this.props.title}</h2>
            <p className="card__desc">{this.props.description}</p>
            <div className="card__info">
                <div className="card__type">
                    <h4>Tipo de donación:</h4>
                    <h3><i className="fa fa-cutlery"></i>{this.props.type}</h3>
                </div>
                <div className="card__location">
                    <h4>Puedes ayudar desde:</h4>
                    <h3><i className="fa fa-globe"></i>{this.props.location}</h3>
                </div>
            </div>
            <a className="card__button" target="__blank" href={this.props.moreInfo}>Más Información</a>
        </article>
    );
  }
}