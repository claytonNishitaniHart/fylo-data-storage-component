import React from 'react';
import './App.scss';

import bg from "./images/bg-desktop.png";
import mobile_bg from "./images/bg-mobile.png";
import logo from "./images/logo.svg";
import doc from "./images/icon-document.svg";
import folder from "./images/icon-folder.svg";
import upload from "./images/icon-upload.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      width: window.innerWidth
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('resize', this.handleResize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleLoad() {
    document.getElementById("slider").style.width = "81.5%";
  }
  
  handleResize() {
    this.setState({width: window.innerWidth});
  }
  
  render() {
    if (this.state.width > 500) {
      return (
        <div className={"Desktop-App"}>
          <img className={"Desktop-App-Image"} src={bg} alt={"background"}/>
          <div className={"Desktop-Box-Primary"}>
            <img className={"Desktop-Box-Primary-Logo"} src={logo} alt={"logo"}/>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button1"}><img className={"Desktop-Box-Primary-Button-Icon"} src={doc} alt={"document"}/></button>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button2"}><img className={"Desktop-Box-Primary-Button-Icon"} src={folder} alt={"folder"}/></button>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button3"}><img className={"Desktop-Box-Primary-Button-Icon"} src={upload} alt={"upload"}/></button>
          </div>
          <div className={"Desktop-Box-Secondary"}>
            <span className={"Desktop-Box-Secondary-Text"}>You've used <span className={"Desktop-Box-Secondary-Text-Bold"}>815 GB</span> of your storage.</span>
            <div className={"Desktop-Box-Secondary-Capacity"}>
              <div id={"slider"} className={"Desktop-Box-Secondary-Capacity-Slider"}/>
              <span className={"Desktop-Box-Secondary-Capacity-Min Desktop-Box-Secondary-Text-Bold"}>
              0 GB
            </span>
              <span className={"Desktop-Box-Secondary-Capacity-Max Desktop-Box-Secondary-Text-Bold"}>
              1000 GB
            </span>
            </div>
            <div className={"Desktop-Box-Secondary-Remaining"}>
              <span className={"Desktop-Box-Secondary-Remaining-Text"}><span className={"Desktop-Box-Secondary-Remaining-Text Desktop-Box-Secondary-Remaining-Text-Bold"}>185 </span> GB LEFT</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={"Mobile-App"}>
          <img className={"Mobile-App-Image"} src={mobile_bg} alt={"background"}/>
          <div className={"Mobile-Box-Primary Desktop-Box-Primary"}>
            <img className={"Desktop-Box-Primary-Logo"} src={logo} alt={"logo"}/>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button1"}><img className={"Desktop-Box-Primary-Button-Icon"} src={doc} alt={"document"}/></button>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button2"}><img className={"Desktop-Box-Primary-Button-Icon"} src={folder} alt={"folder"}/></button>
            <button className={"Desktop-Box-Primary-Button Desktop-Box-Primary-Button3"}><img className={"Desktop-Box-Primary-Button-Icon"} src={upload} alt={"upload"}/></button>
          </div>
          <div className={"Desktop-Box-Secondary Mobile-Box-Secondary"}>
            <span className={"Desktop-Box-Secondary-Text"}>You've used <span className={"Desktop-Box-Secondary-Text-Bold"}>815 GB</span> of your storage.</span>
            <div className={"Desktop-Box-Secondary-Capacity"}>
              <div id={"slider"} className={"Desktop-Box-Secondary-Capacity-Slider"}/>
              <span className={"Desktop-Box-Secondary-Capacity-Min Desktop-Box-Secondary-Text-Bold"}>
              0 GB
            </span>
              <span className={"Desktop-Box-Secondary-Capacity-Max Desktop-Box-Secondary-Text-Bold"}>
              1000 GB
            </span>
            </div>
            <div className={"Mobile-Box-Secondary-Remaining"}>
              <span className={"Desktop-Box-Secondary-Remaining-Text Mobile-Box-Secondary-Remaining-Text"}><span className={"Desktop-Box-Secondary-Remaining-Text Desktop-Box-Secondary-Remaining-Text-Bold Mobile-Box-Secondary-Remaining-Text Mobile-Box-Secondary-Remaining-Text-Bold"}>185 </span> GB LEFT</span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
