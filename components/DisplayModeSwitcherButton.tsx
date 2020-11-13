import React from 'https://esm.sh/react'
import MoonIcon from "./MoonIcon.tsx"
import SunIcon from "./SunIcon.tsx"
export default class DisplayModeSwitcherButton extends React.Component {
    constructor(props: {} ) {
      super(props);
      this.state = {isDark: true};

      // This binding is necessary to make `this` work in the callback
      this.displayModeSwitcher = this.displayModeSwitcher.bind(this);
    }


    displayModeSwitcher() {
      this.setState(prevState => ({
        isDark: !prevState.isDark
      }));
      if(this.state.isDark){
        document.querySelector(':root').style ='--main-color: #d4d7db !important; --background-color:#000 !important'
    }else{
        document.querySelector(':root').style ='--main-color: #000 !important; --background-color:#fff !important'
    }

    }

    render() {
      return (
        <button className='theme-switcher-btn' onClick={this.displayModeSwitcher}>
          {this.state.isDark ? <MoonIcon width="32"/> : <SunIcon width="32"/>}
        </button>
      );
    }
  }

