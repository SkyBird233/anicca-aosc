const dataUrl =
  "https://raw.githubusercontent.com/Suyun114/anicca-aosc/main/pkgsupdate.json";

const data = await fetch(dataUrl).then((response) => response.json());

const dataSet = data.map((row) => {
  row.before = row.before.replaceAll("+", "<br>+");
  row.path = row.path.slice(0, row.path.lastIndexOf("/"));
  return Object.values(row);
});

new DataTable("#pkgsupdate", {
  columns: [
    { title: "Package" },
    { title: "Repo Version" },
    { title: "New Version" },
    { title: "Path" },
    { title: "Warngings" },
  ],
  scrollX: true,
  lengthMenu: [
    10,
    25,
    50,
    100,
    { label: "8d", value: 0x8d },
    { label: "All", value: -1 },
  ],
  search: {
    regex: true,
  },
  layout: {
    bottomEnd: {
      paging: {
        type: "simple_numbers",
      },
    },
  },
  data: dataSet,
});
