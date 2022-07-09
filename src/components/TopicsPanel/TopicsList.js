function TopicsList(props) {
  const topics = props.topics;
  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id}>
          <p>{topic.Name}</p>
        </div>
      ))}
    </div>
  );
}

export default TopicsList;
