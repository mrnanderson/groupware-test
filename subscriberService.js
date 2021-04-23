const getSubscriber = ({ name }) => {
  return {
    name,
    receiveMessage: (message, item) => {
      console.log(`${name} was notified that ${message}`);
    },
  };
};

module.exports = {
  getSubscriber,
};
