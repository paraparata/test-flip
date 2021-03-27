function sorting(items, key, type) {
  switch (type) {
    case "asc-string":
      return items.sort((a, b) => {
        a = a[key].toLowerCase();
        b = b[key].toLowerCase();

        return a > b ? 1 : b > a ? -1 : 0;
      });

    case "des-string":
      return items.sort((a, b) => {
        a = a[key].toLowerCase();
        b = b[key].toLowerCase();

        return a > b ? -1 : b > a ? 1 : 0;
      });

    case "asc-date":
      return items.sort((a, b) => {
        a = Date.parse(a[key]);
        b = Date.parse(b[key]);

        return b - a;
      });

    case "des-date":
      return items.sort((a, b) => {
        a = Date.parse(a[key]);
        b = Date.parse(b[key]);

        return a - b;
      });

    default:
      break;
  }
}

export { sorting };
