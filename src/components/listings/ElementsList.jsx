import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./ElementsList.module.css";

function ElementsList(props) {
  const { elements, icon, size } = props;
  return (
    <div className={CSS.ElementList}>
      {elements.map((element) => {
        return (
          <div key={element.name} className={CSS.Element}>
            <FontAwesomeIcon icon={icon} size={size} className={CSS.Icon} />
            <div className={CSS.ElementName}>{element.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ElementsList;
