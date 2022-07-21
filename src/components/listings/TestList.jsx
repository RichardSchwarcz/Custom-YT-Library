import CSS from "./ElementsList.module.css";

function ElementsList(props) {
  const { elements, ElementStyle, onClick, Icon } = props;
  return (
    <div className={CSS.ElementList}>
      {elements.map((element) => {
        return (
          <div key={element.name} className={ElementStyle} onClick={onClick}>
            {Icon}
            {element.name}
          </div>
        );
      })}
    </div>
  );
}

export default ElementsList;
