const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initial_Elements_1 = [
  {
    id: "1",
    type: "input",
    data: { label: "Class 1" },
    position,
  },
  {
    id: "2",
    data: { label: "method 2" },
    position,
  },
  {
    id: "2a",
    data: { label: "method 3" },
    position,
  },
  {
    id: "2b",
    data: { label: "method 4" },
    position,
  },
  {
    id: "2c",
    data: { label: "method 5" },
    position,
  },
  {
    id: "2d",
    data: { label: "method 6" },
    position,
  },
  {
    id: "3",
    data: { label: "method 7" },
    position,
  },
  {
    id: "4",
    data: { label: "Class 2" },
    position,
  },
  {
    id: "5",
    data: { label: "method 8" },
    position,
  },
  {
    id: "6",
    type: "output",
    data: { label: "output" },
    position,
  },
  { id: "7", type: "output", data: { label: "output" }, position },

  { id: "8", data: { label: "method 8" }, position },
  {
    id: "e12",
    source: "1",
    target: "2",
    type: edgeType,
    arrowHeadType: "",
  },
  {
    id: "e13",
    source: "2",
    target: "2a",
    type: edgeType,
    arrowHeadType: "",
  },
  // {
  //   id: "e18",
  //   source: "2",
  //   target: "8",
  //   type: edgeType,
  //   arrowHeadType: "",
  // },
  {
    id: "e12",
    source: "1",
    target: "2",
    type: edgeType,
    arrowHeadType: "",
  },
 {
    id: "e38",
    source: "2a",
    target: "8",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },

  // {
  //   id: "e22a",
  //   source: "2",
  //   target: "2a",
  //   type: edgeType,
  //   arrowHeadType: "arrowclosed",
  // },
  {
    id: "e22b",
    source: "2a",
    target: "2b",
    type: edgeType,
    arrowHeadType: "",
  },
  {
    id: "e22c",
    source: "2b",
    target: "2c",
    type: edgeType,
    arrowHeadType: "",
  },
  {
    id: "e2c2d",
    source: "2c",
    target: "2d",
    type: edgeType,
    arrowHeadType: "",
  },
  {
    id: "e56",
    source: "4",
    target: "3",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e56",
    source: "4",
    target: "3",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e45",
    source: "4",
    target: "5",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e56",
    source: "5",
    target: "6",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },

  {
    id: "e57",
    source: "5",
    target: "7",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e65",
    source: "6",
    target: "5",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e75",
    source: "7",
    target: "5",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
];

export const initialClasses = [
  {
    id: "104", //c_int
    path: "/source/file/anotherfile", //Absolute path of file containing the class in local and url in Github
    lineNumber: "35", //Int showing starting line of the class
    accessModifier: "public",
    nodes: [{ name: "getHelperMethod", id: 212 }], // id: m_int //node - method in a class.
  },
  {
    id: "105", //c_int
    path: "/source/file/anotherfile", //Absolute path of file containing the class in local and url in Github
    lineNumber: "35", //Int showing starting line of the class
    accessModifier: "public",
    nodes: [{ name: "getHelperMethod", id: 212 }], // id: m_int //node - method in a class.
  },
];

export const initialMethods= [{
  name: "",
  className: "",
  lineNumber: "94", 
  accessModifier: "public", 
  arguments: ["Integer", ], //array of strings- dataType
  returnType: [], //array of strings- dataType
  toNodes: [{nodeName: "", nodeId: '4', className: "" }, {}] ,//edges leading to the node.
  fromEdges: [{nodeName: "", nodeId: '5', className: "" }, {}] //edges leading out from the node.

}]

