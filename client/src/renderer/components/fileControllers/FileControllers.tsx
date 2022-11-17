import React, { useState } from 'react';
import FileSaver from 'file-saver';
import Import from '../../../../assets/SVGs/FileControllers/Import';
import NewFile from '../../../../assets/SVGs/FileControllers/NewFile';
import OpenFile from '../../../../assets/SVGs/FileControllers/OpenFile';
import SaveFile from '../../../../assets/SVGs/FileControllers/SaveFile';
import SaveAs from '../../../../assets/SVGs/FileControllers/SaveAs';
import FileControlsButton from './FileControlsButton';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentFile } from '../../../features/prompt/promptSlice';
import NewFileModal from './NewFileModal';
// const FileSaver = require('file-saver');

const FileControllers = () => {
  const currentFile = useAppSelector(selectCurrentFile);
  const [showNewFileModal, setShowNewFileModal] = useState(false);
  const toggleNewFileModal = () => {
    setShowNewFileModal((p) => {
      return !p;
    });
  };
  const saveCurrentFile = () => {
    if (currentFile) {
      const blob = new Blob([currentFile.text.join('\n')], {
        type: 'text/plain;charset=utf-8',
      });
      FileSaver.saveAs(blob, `${currentFile.name}.txt`);
    }
  };
  return (
    <div className="fileControls">
      <FileControlsButton
        clickFunction={toggleNewFileModal}
        backgroundColor="var(--blue1)"
        text="New File"
        svg={<NewFile />}
      />
      <FileControlsButton
        clickFunction={saveCurrentFile}
        backgroundColor="var(--blue1)"
        text="Open File"
        svg={<OpenFile />}
      />
      <FileControlsButton
        clickFunction={saveCurrentFile}
        backgroundColor="var(--blue1)"
        text="Save File"
        svg={<SaveFile />}
      />
      <FileControlsButton
        clickFunction={saveCurrentFile}
        backgroundColor="var(--blue1)"
        text="Save As"
        svg={<SaveAs />}
      />
      <FileControlsButton
        clickFunction={saveCurrentFile}
        backgroundColor="var(--green1)"
        text="Import"
        svg={<Import />}
      />
      {showNewFileModal ? (
        <NewFileModal closeFunction={toggleNewFileModal} />
      ) : null}
    </div>
  );
};

export default FileControllers;
