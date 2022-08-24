const getProducts = () => {
  return [
    {
      id: 1,
      name: "Blinky",
      images: {
        small: "blinky-small.png",
        big: "blinky-big.png",
      },
      descriptions: {
        short: "Pack leader",
        long:
          "Natural leader. Gets a speed boost when pack pellets are cleared.",
      },
      price: 1337,
      url: "/products/1",
    },
    {
      id: 2,
      name: "Inky",
      images: {
        small: "inky-small.png",
        big: "inky-big.png",
      },
      descriptions: {
       short: "Hungover but swift",
        long:
          "Had a big night yesterday, but brace yourself, he is still pretty fast.",
      },
      price: 3141,
      url: "/products/2",
    },
    {
      id: 3,
      name: "Pinky",
      images: {
        small: "pinky-small.png",
        big: "pinky-big.png",
      },
      descriptions: {
        short: "Natural ambusher",
        long: "Natural ambusher. Will cut you off. Be careful when you turn!",
      },
      price: 2718,
      url: "/products/3",
    },
    {
      id: 4,
      name: "Clyde",
      images: {
        small: "clyde-small.png",
        big: "clyde-big.png",
      },
      descriptions: {
        short: "Got chaotic moves",
        long: "moves = Math.random() * Math.floor(10000000)",
      },
      price: 1235,
      url: "/products/4",
    },
  ];
};
    
exports.getProducts = getProducts;