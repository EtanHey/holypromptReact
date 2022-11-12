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
}
export const StyledTextArea = styled.textarea.attrs((props: TextAreaProps) => ({
  style: {
    height: `${props.height}px`,
  },
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
    font-size: 16px;
    line-height: 32px;
  }
`;
