const { Prisma } = require("@prisma/client");

const count = [
  {
    name: "count",
    value: 0,
    createdAt: new Date("2020-03-19T14:21:00+0200"),
    updatedAt: new Date("2021-03-19T14:21:00+0200"),
    constellation: "1",
  },
];

module.exports = {
  count,
};
