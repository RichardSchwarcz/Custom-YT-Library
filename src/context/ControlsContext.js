import axios from "axios";
import { createContext, useEffect, useState } from "react";
import postToDB from "../helpers/postToDB";

const ControlsContext = createContext();

export function ControlsContextProvider(props) {
  const [createNewTopicModal, setCreateNewTopicModal] = useState(false);
  const [addNewVideoModal, setAddNewVideoModal] = useState(false);
  const [createNewFolderModal, setCreateNewFolderModal] = useState(false);

  const [data, setData] = useState({
    Topics: [],
    Videos: [],
    Folders: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topicsResponse, videosResponse, foldersResponse] =
          await Promise.all([
            axios.get("http://localhost:8000/Topics"),
            axios.get("http://localhost:8000/Videos"),
            axios.get("http://localhost:8000/Folders"),
          ]);

        setData({
          ...data,
          Topics: topicsResponse.data,
          Videos: videosResponse.data,
          Folders: foldersResponse.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  async function refetch(type) {
    // fetch list where type is type
    const response = await axios.get("http://localhost:8000/" + type);

    setData({
      ...data,
      [type]: response.data,
    });

    //set data[type] to fetched list from above
  }

  /**
   *
   * @param {object} data create data
   * @param {string} type  one of TYPES
   */
  async function create(data, type) {
    const obj = { ...data, deleted: "notDeleted" };
    await postToDB(obj, type);
    await refetch(type);
  }

  return (
    <ControlsContext.Provider
      value={{
        modals: {
          createNewTopicModal,
          setCreateNewTopicModal,
          addNewVideoModal,
          setAddNewVideoModal,
          createNewFolderModal,
          setCreateNewFolderModal,
        },
        model: {
          data,
          create,
        },
      }}
    >
      {props.children}
    </ControlsContext.Provider>
  );
}

export default ControlsContext;
