import React from 'react';
import Editor from '../components/Editor';
import OutputControl from '../components/OutputControl';
import PromptModal from '../components/PromptModal';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="fileControls">1</div>
        <div className="settingsButton">2</div>
        <div className="editorControls">3</div>
        <div className="promptButton">4</div>
        <OutputControl />
        <div className="bottomLine">6</div>
        <Editor />
        <PromptModal />
      </div>
    </div>
  );
};

export default Home;
