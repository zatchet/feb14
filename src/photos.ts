const photos = Array.from({ length: 44 }, (_, i) => ({
  src: "sample_fruit.jpg",
  key: `photo-${i}`,
  width: Math.floor(Math.random() * 101) + 300,
  height: Math.floor(Math.random() * 101) + 300,
}));

export default photos;
