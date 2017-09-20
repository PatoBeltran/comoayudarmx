import * as React from 'react';
import { MainHeader } from '../components/header'
import { Intro } from '../components/intro'
import { AboutModal } from '../components/aboutModal'
import { HowToModal } from '../components/howtoModal'

import Cards from '../containers/cards'

interface IHomeProps {
  showAboutModal: boolean,
  closeModal: (ModalType) => void
}

export class Home extends React.Component<IHomeProps, any> {
  render() {
    return (
      <div>
        <MainHeader />
        <Intro />
        <Cards />
        <AboutModal display={this.props.showAboutModal} close={this.props.closeModal}/>
        <HowToModal display={this.props.showAboutModal} close={this.props.closeModal}/>
      </div>
    );
  }
}