const ACRONYMS = ["bri", "bni", "bca", "bsm", "btpn"];

function naturalText(text) {
  if (ACRONYMS.includes(text)) {
    return text.toUpperCase();
  } else {
    return text
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  }
}

export { naturalText };
