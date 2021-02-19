var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  setTimeout(
    (i) => {
      console.log(colors[i]);
      console.log(i);
    },
    (i + 1) * 1000,
    i,
  );
}
