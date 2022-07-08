import TopicsCSS from "./Topics.module.css";

function Topics() {
  return (
    <div className={TopicsCSS.Container}>
      <div className={TopicsCSS.Title}>
        <h2 className={TopicsCSS.Header}>Topics</h2>
      </div>
      <div className={TopicsCSS.ContentContainer}>
        <div className={TopicsCSS.Category}></div>
        <div className={TopicsCSS.Topics}></div>
        <div className={TopicsCSS.CategButton}>+</div>
        <div className={TopicsCSS.TopicButton}>Create New</div>
      </div>
    </div>
  );
}

export default Topics;

<div class="container">
  <div class="Title"></div>
  <div class="Home">
    <div class="Category"></div>
    <div class="Topics"></div>
    <div class="TopicButtons"></div>
    <div class="CatButtons"></div>
  </div>
</div>;
