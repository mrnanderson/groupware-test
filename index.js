// Import events module
var events = require("events");
var shelfService = require("./shelfService");
var subscriberService = require("./subscriberService");

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

let shelf = { surface: [], emitter: eventEmitter };

const folio1 = { id: 1 };
const folio2 = { id: 2 };
const folio3 = { id: 3 };
let nick = subscriberService.getSubscriber({ name: "Nick" });
let antonius = subscriberService.getSubscriber({ name: "Antonius" });

// subscribe nick
const nickSubscription = shelfService.subscribeToShelf({
  subscriber: nick,
  shelf,
});
nick = nickSubscription.subscriber;
shelf = nickSubscription.shelf;

//subscribe antonius
const antoniusSubscription = shelfService.subscribeToShelf({
  subscriber: antonius,
  shelf,
});
antonius = antoniusSubscription.subscriber;
shelf = antoniusSubscription.shelf;

//put 2 items on the shelf
shelf = shelfService.putOnShelf({ item: folio1, shelf });
shelf = shelfService.putOnShelf({ item: folio2, shelf });

//take an item off of the shelf
shelf = shelfService.takeOffShelf({ item: folio2, shelf });

//unsubscribe nick
const nickUnSubscription = shelfService.unsubscribeToShelf({
  subscriber: nick,
  shelf,
});
nick = nickUnSubscription.subscriber;
shelf = nickUnSubscription.shelf;

//take an item off of the shelf
shelf = shelfService.takeOffShelf({ item: folio1, shelf });

//put an item on the shelf then take off
shelf = shelfService.putOnShelf({ item: folio3, shelf });
shelf = shelfService.takeOffShelf({ item: folio3, shelf });

//unsubscribe antonius
const antoniusUnSubscription = shelfService.unsubscribeToShelf({
  subscriber: antonius,
  shelf,
});
antonius = nickUnSubscription.subscriber;
shelf = nickUnSubscription.shelf;

//put an item on the shelf then take off
const folio4 = { id: 4 };
shelf = shelfService.putOnShelf({ item: folio4, shelf });
shelf = shelfService.takeOffShelf({ item: folio4, shelf });
