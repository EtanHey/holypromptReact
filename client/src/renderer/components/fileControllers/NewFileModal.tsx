/* eslint-disable promise/catch-or-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { BaseSyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { saveUserFilesThunk } from '../../../features/prompt/promptAPI';
import {
  addFileToUser,
  selectUsersState,
} from '../../../features/users/usersSlice';

interface NewFileModalProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  closeFunction: Function;
}

const NewFileModal = (props: NewFileModalProps) => {
  const { closeFunction } = props;
  const dispatch = useAppDispatch();
  const User = useAppSelector(selectUsersState);
  const handleCreateNewFile = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    let { name, extension } = ev.target.elements;
    name = name.value;
    extension = extension.value;
    const newFile = await dispatch(
      saveUserFilesThunk({
        name: `${name}.${extension}`,
        text: [''],
        ownerId: User.id,
      })
    );
    dispatch(addFileToUser(newFile.payload));
    closeFunction();
  };
  return (
    <div
      className="fileModal"
      onClick={(ev: BaseSyntheticEvent) => {
        if (ev.target.className === 'fileModal') closeFunction();
      }}
    >
      <div className="fileModal__container">
        <button className="xButton" onClick={() => closeFunction()}>
          &#215;
        </button>
        <h2>choose a new file name</h2>
        <form onSubmit={(ev: BaseSyntheticEvent) => handleCreateNewFile(ev)}>
          <div className="inputs">
            <input type="text" name="name" />.
            <input
              type="text"
              list="extensionTypes"
              name="extension"
              id="extension"
              defaultValue="txt"
            />
            <datalist id="extensionTypes">
              <option value="txt">txt</option>
              <option value="rtf">rtf</option>
              <option value="doc">doc</option>
            </datalist>
          </div>
          <input type="submit" value="Save New File" />
        </form>
      </div>
    </div>
  );
};

export default NewFileModal;
