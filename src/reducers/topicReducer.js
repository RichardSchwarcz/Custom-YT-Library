const initialState = { items: [] };

function topicReducer(state, action) {
  switch (action.type) {
    case "addTopic":
      const {name, tag} = action.payload
      await addTopicToDb(pay)

      return {
        items: [
          ...state.items, 
          {name, tag}
        ]
      };
      case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
export { topicReducer as folderReducer };
