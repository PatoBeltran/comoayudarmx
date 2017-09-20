import * as React from 'react';
import { connect } from 'react-redux';

import { MainHeader } from '../components/header';
import { Intro } from '../components/intro';
import { AboutModal } from '../components/aboutModal';
import { HowToModal } from '../components/howtoModal';
import { ModalType } from '../types';
import Cards from '../containers/cards';

import { toggle_modal } from '../actions'

class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <MainHeader show_about={this.props.show_about}/>
        <Intro show_about={this.props.show_about} />
        <Cards />
        <AboutModal display={this.props.showAboutModal} close={this.props.hide_about}/>
        <HowToModal display={this.props.showHowToModal} close={this.props.hide_howto}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const showAboutModal = state.modals && state.modals.type == ModalType.About && state.modals.showing;
  const showHowToModal = state.modals && state.modals.type == ModalType.HowTo && state.modals.showing;
  console.log(state);

  return {
    showAboutModal: showAboutModal,
    showHowToModal: showHowToModal,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      show_about: () => dispatch(toggle_modal(ModalType.About, true)),
      hide_about: () => dispatch(toggle_modal(ModalType.About, false)),
      show_howto: () => dispatch(toggle_modal(ModalType.HowTo, true)),
      hide_howto: () => dispatch(toggle_modal(ModalType.HowTo, false)),      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)