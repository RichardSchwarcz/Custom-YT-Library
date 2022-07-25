import { useContext } from "react";
import ControlsContext from "../../../../context/ControlsContext";
import { TopicsList } from "../../../listings";
import {
  CreateTopicModal,
  AddVideoModal,
  NewFolderModal,
} from "../../../modals";

import CSS from "../Controls.module.css";

function Topics() {
  const {
    modals: {
      createNewTopicModal,
      setCreateNewTopicModal,
      addNewVideoModal,
      setAddNewVideoModal,
      createNewFolderModal,
      setCreateNewFolderModal,
    },
    model: { data },
  } = useContext(ControlsContext);

  const topics = data.Topics;
  return (
    <>
      <div className={CSS.TopicList}>
        {topics && <TopicsList topics={topics} />}
      </div>

      <div>
        {createNewTopicModal && (
          <CreateTopicModal
            // onCreate={refetch}
            closeModal={setCreateNewTopicModal}
          />
        )}
      </div>

      <div>
        {addNewVideoModal && <AddVideoModal closeModal={setAddNewVideoModal} />}
      </div>

      <div>
        {createNewFolderModal && (
          <NewFolderModal closeModal={setCreateNewFolderModal} />
        )}
      </div>
    </>
  );
}

export default Topics;
