import { useNavigate } from "react-router-dom";
import groupByTag from "../../../helpers/groupTopics";
import CSS from "./TopicsList.module.css";

function TopicsList(props) {
  const topics = props.topics;
  const navigate = useNavigate();

  const groupedTopics = groupByTag(topics);

  return (
    <div>
      {groupedTopics.map((items) => {
        return (
          <div key={items[0].tag}>
            <div className={CSS.Tags}>{items[0].tag}</div>
            <div className={CSS.List}>
              {items.map((topic) => {
                return (
                  <div
                    key={topic.name}
                    className={CSS.Topic}
                    onClick={() => navigate(`/${topic.name}`)}
                  >
                    {topic.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TopicsList;
