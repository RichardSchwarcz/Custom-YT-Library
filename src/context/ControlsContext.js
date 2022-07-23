import { createContext, useState } from "react";

const ControlsContext = createContext();

export function ControlsContextProvider(props) {
  const [createNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [addNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

  const states = {
    createNewTopicModal,
    setCreateNewTopicModal,
    addNewVideoModal,
    setAddNewVideoModal,
    createNewFolderModal,
    setCreateNewFolderModal,
  };

  return (
    <ControlsContext.Provider value={states}>
      {props.children}
    </ControlsContext.Provider>
  );
}

export default ControlsContext;
