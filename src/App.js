import React from 'react';
import './App.scss';

import bg from "./images/bg-desktop.png";
import logo from "./images/logo.svg";
import doc from "./images/icon-document.svg";
import folder from "./images/icon-folder.svg";
import upload from "./images/icon-upload.svg";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  
  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad)
  }
  
  handleLoad() {
    document.getElementById("slider").style.width = "81.5%";
  }
  
  render() {
    return (
      <div className={"App"}>
        <img className={"App-Image"} src={bg} alt={"background"}/>
        <div className={"Box-Primary"}>
          <img className={"Box-Primary-Logo"} src={logo} alt={"logo"}/>
          <button className={"Box-Primary-Button Box-Primary-Button1"}><img className={"Box-Primary-Button-Icon"} src={doc} alt={"document"}/></button>
          <button className={"Box-Primary-Button Box-Primary-Button2"}><img className={"Box-Primary-Button-Icon"} src={folder} alt={"folder"}/></button>
          <button className={"Box-Primary-Button Box-Primary-Button3"}><img className={"Box-Primary-Button-Icon"} src={upload} alt={"upload"}/></button>
        </div>
        <div className={"Box-Secondary"}>
          <span className={"Box-Secondary-Text"}>You've used <span className={"Box-Secondary-Text-Bold"}>815 GB</span> of your storage.</span>
          <div className={"Box-Secondary-Capacity"}>
            <div id={"slider"} className={"Box-Secondary-Capacity-Slider"}/>
            <span className={"Box-Secondary-Capacity-Min Box-Secondary-Text-Bold"}>
              0 GB
            </span>
            <span className={"Box-Secondary-Capacity-Max Box-Secondary-Text-Bold"}>
              1000 GB
            </span>
          </div>
          <div className={"Box-Secondary-Remaining"}>
            <span className={"Box-Secondary-Remaining-Text"}><span className={"Box-Secondary-Remaining-Text Box-Secondary-Remaining-Text-Bold"}>185 </span> GB LEFT</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
