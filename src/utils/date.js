const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "December",
];

function date(value) {
  const dateRaw = value.split(" ")[0];

  const year = dateRaw.split("-")[0];
  const month = dateRaw.split("-")[1];
  const day = dateRaw.split("-")[2];

  const date = `${day} ${months[parseInt(month) + 1]} ${year}`;

  return date;
}

export { date };
