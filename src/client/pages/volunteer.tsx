import * as React from 'react';
import { MainHeader } from '../components/header'
import { Intro } from '../components/intro'

export class Volunteer extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Intro />
        
      </div>
    );
  }
}