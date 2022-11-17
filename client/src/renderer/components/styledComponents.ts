import { Ref } from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  bgColor?: string;
  textColor?: string;
  ref?: Ref<HTMLTextAreaElement>;
  height: number;
}
interface EditorProps {
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
}
export const StyledTextArea = styled.textarea.attrs((props: TextAreaProps) => ({
  style: {
    height: `${props.height}px`,
  },
  textContent: 'hello world',
}))`
  background-color: inherit;
  color: inherit;
  width: 100%;
  min-height: 100%;
  overflow-y: hidden;
  border: none;
  resize: none;
  outline: none;
  border: none;
  grid-column: 2;
  white-space: nowrap;
`;

export const StyledEditor = styled.div.attrs((props: EditorProps) => ({
  style: {
    background: props.bgColor || 'var(--black)',
    color: props.textColor || 'var(--white)',
  },
}))`
  min-width: 65vw;
  height: 80vh;
  grid-area: editor;
  justify-self: center;
  align-self: center;
  outline: none;
  border: none;
  display: grid;
  grid-template-rows: 5ch 1fr;
  overflow: hidden;
  * {
    font-family: 'Rubik', sans-serif;
    padding: 0;
    border: 0;
    font-weight: 400;
    font-size: ${(props: EditorProps) => props.fontSize}||16px;
    line-height: 32px;
  }
`;

interface StyledPromptModalProps {
  bgColor: string;
  textColor: string;
  show: boolean;
  size: string;
  fontSize: string;
  aspectRatio?: string;
}
export const StyledPromptModal: any = styled.div.attrs(
  (props: StyledPromptModalProps) => ({
    style: {
      width: props.size || '50%',
      // maxHeight: window.innerHeight * Number(props.size),
      display: props.show ? 'block' : 'none',
      background: props.bgColor || 'var(--black)',
      color: props.textColor || 'var(--white)',
      aspectRatio: `${window.innerWidth} / ${window.innerHeight}`,
    },
  })
)<StyledPromptModalProps>`
  overflow: overlay;
  top: 0;
  left: 0;
  padding: 0;
  border: 0;
  position: fixed;
  & * {
    font-weight: 400;
    font-family: 'Rubik', sans-serif;
    font-size: ${(props: StyledPromptModalProps) => props.fontSize} || 16px;
    line-height: 32px;
  }
  .styledPromptModalContainer {
    display: flex;
    flex-direction: row;
    overflow: scroll;
  }
`;
