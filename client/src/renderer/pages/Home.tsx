import React, { LegacyRef, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeLocalPromptStatus,
  selectPromptState,
} from '../../features/prompt/promptSlice';
import Editor from '../components/editor/Editor';
import FileControllers from '../components/fileControllers/FileControllers';
import OutputControl from '../components/outputControls/OutputControlSidebar';
import PromptModal from '../components/outputControls/PromptModal';

const Home = () => {
  const HomeRef: LegacyRef<HTMLDivElement> = useRef(null);
  const promptState = useAppSelector(selectPromptState);
  return (
    <div className="home" ref={HomeRef}>
      <div className="home__container">
        <FileControllers />
        <div className="settingsButton">2</div>
        <div className="editorControls">3</div>
        <div className="promptButton">4</div>
        <OutputControl />
        <div className="bottomLine">6</div>
        <Editor />
        {promptState.local.monitor ? <PromptModal /> : null}
      </div>
    </div>
  );
};

export default Home;
