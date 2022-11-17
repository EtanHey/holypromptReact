import React from 'react';

interface FileControlsButtonProps {
  backgroundColor: string;
  text: string;
  svg: JSX.Element;
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickFunction: Function;
}

const FileControlsButton = (props: FileControlsButtonProps) => {
  const { svg, text, backgroundColor, clickFunction } = props;
  return (
    <button
      onClick={() => {
        clickFunction();
      }}
      className="fileControls__button"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {svg} {text}
    </button>
  );
};

export default FileControlsButton;
