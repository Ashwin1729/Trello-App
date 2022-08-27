const cards1 = [
  {
    id: "card-1",
    title: "Financial and Growth",
  },
  {
    id: "card-2",
    title: "2022 Goals",
  },
  {
    id: "card-3",
    title: "Brand Guide",
  },
  {
    id: "card-4",
    title: "Employee Manual",
  },
];

const cards2 = [
  {
    id: "card-5",
    title: "React.js",
  },
  {
    id: "card-6",
    title: "Node.js",
  },
  {
    id: "card-7",
    title: "DSA",
  },
  {
    id: "card-8",
    title: "Intern Tasks",
  },
  {
    id: "card-9",
    title: "Reading Book",
  },
];

const cards3 = [
  {
    id: "card-10",
    title: "Programming",
  },
  {
    id: "card-11",
    title: "Projects",
  },
];

// const cards4 = [
//   {
//     id: "card-12",
//     title: "Anime",
//   },
//   {
//     id: "card-13",
//     title: "Assignments",
//   },
//   {
//     id: "card-14",
//     title: "Operating Systems",
//   },
// ];

const Data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "To Do",
      cards: cards1,
    },
    "list-2": {
      id: "list-2",
      title: "Doing",
      cards: cards2,
    },
    "list-3": {
      id: "list-3",
      title: "Done",
      cards: cards3,
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default Data;
