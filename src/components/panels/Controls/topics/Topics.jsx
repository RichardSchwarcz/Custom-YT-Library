import { useContext } from "react";
import ControlsContext from "../../../../context/ControlsContext";
import useFetch from "../../../../hooks/useFetch";
import { TopicsList } from "../../../listings";
import {
  CreateTopicModal,
  AddVideoModal,
  NewFolderModal,
} from "../../../modals";

import CSS from "../Controls.module.css";

function Topics() {
  const { data, refetch } = useFetch("/Topics");

  const {
    createNewTopicModal,
    setCreateNewTopicModal,
    addNewVideoModal,
    setAddNewVideoModal,
    createNewFolderModal,
    setCreateNewFolderModal,
  } = useContext(ControlsContext);

  return (
    <>
      <div className={CSS.TopicList}>
        {data && <TopicsList topics={data} />}
      </div>

      <div>
        {createNewTopicModal && (
          <CreateTopicModal
            onCreate={refetch}
            closeModal={setCreateNewTopicModal}
          />
        )}
      </div>

      <div>
        {addNewVideoModal && (
          <AddVideoModal onCreate={refetch} closeModal={setAddNewVideoModal} />
        )}
      </div>

      <div>
        {createNewFolderModal && (
          <NewFolderModal
            onCreate={refetch}
            closeModal={setCreateNewFolderModal}
          />
        )}
      </div>
    </>
  );
}

export default Topics;
