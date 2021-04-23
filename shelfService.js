const putOnShelf = ({ item, shelf }) => {
  shelf.surface.push(item);
  shelf.emitter.emit("putonshelf", `item:${item.id} was put on the self`, item);
  return shelf;
};

const takeOffShelf = ({ item, shelf }) => {
  const itemIndex = shelf.surface.findIndex((sItem) => sItem.id === item.id);
  if (itemIndex >= 0) {
    shelf.emitter.emit(
      "takeoffshelf",
      `item:${item.id} was taken off the self`,
      item
    );
    shelf.surface = shelf.surface.filter((sItem) => sItem.id !== item.id);
  }
  return shelf;
};

const subscribeToShelf = ({ subscriber, shelf }) => {
  shelf.emitter.on("putonshelf", subscriber.receiveMessage);
  shelf.emitter.on("takeoffshelf", subscriber.receiveMessage);
  return { subscriber, shelf };
};

const unsubscribeToShelf = ({ subscriber, shelf }) => {
  shelf.emitter.removeListener("putonshelf", subscriber.receiveMessage);
  shelf.emitter.removeListener("takeoffshelf", subscriber.receiveMessage);
  return { subscriber, shelf };
};

module.exports = {
  putOnShelf,
  takeOffShelf,
  subscribeToShelf,
  unsubscribeToShelf,
};
