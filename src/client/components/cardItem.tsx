import * as React from 'react';

interface ICardProps {
    title: string,
    description: string,
    type: string,
    location: string,
    moreInfo: string,
    phone: string
}

export class CardItem extends React.Component<ICardProps, any> {
  render() {
    const { title, description, type, location, moreInfo, phone } = this.props;
    return (
        <article className="card">
            <h2 className="card__title">{title}</h2>
            {
              description &&
                <p className="card__desc">{description}</p>
            }
            <div className="card__info">
                <div className="card__type">
                {
                  phone ?
                    <div>
                      <h4>Teléfono de Emergencia:</h4>
                      <h3>
                        <a href={`tel:${phone}`}>
                          <i className="fa fa-phone"></i>
                          {phone}
                        </a>
                      </h3>
                    </div>:
                    <div>
                      <h4>Tipo de donación:</h4>
                      <h3>
                        <i className="fa fa-cutlery"></i>
                        {type}
                      </h3>
                    </div>
                }
                </div>
                <div className="card__location">
                    <h4>Puedes ayudar desde:</h4>
                    <h3><i className="fa fa-globe"></i>{location}</h3>
                </div>
            </div>
            <a className="card__button" target="__blank" href={moreInfo}>Más Información</a>
        </article>
    );
  }
}
