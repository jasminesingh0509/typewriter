const charArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   '];
for (let i = 0; i < charArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(charArray[i]);
  }, (100 + (200 * i)));
};

