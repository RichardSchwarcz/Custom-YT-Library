function groupByTag(topics) {
  const groupedObj = topics.reduce((group, topic) => {
    const { tag } = topic;
    group[tag] = group[tag] ?? [];
    group[tag].push(topic);
    return group;
  }, {});

  return Object.values(groupedObj);
}

export default groupByTag;

/*this function groups topics by tag and creates 2D array.
Each tag has its own array*/
