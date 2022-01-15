const position = { x: 0, y: 0 };
const edgeType = "floating";

export const initial_Elements_1 = [
  {
    id: "1",
    type: "default",
    data: { label: "Class 1" , target: "2"},
    position,
  },
  {
    id: "2",
    data: { label: "method 2", target: "3" },
    position,
  },
  {
    id: "3",
    data: { label: "method 3" , target: ["2a", "2b"]},
    position,
  },
  {
    id: "4",
    data: { label: "method 4" },
    position,
  },
  {
    id: "5",
    data: { label: "method 5" },
    position,
  },
  {
    id: "6",
    data: { label: "method 6" },
    position,
  },
  {
    id: "7",
    data: { label: "method 7" },
    position,
  },
  {
    id: "1a",
    data: { label: "Class 2" },
    position,
  },
  {
    id: "2a",
    data: { label: "method 2a" },
    position,
  },
  {
    id: "3a",
    data: { label: "method 3a" },
    position,
  },
  { id: "4a", data: { label: "method 4a" }, position },

  { id: "5a", data: { label: "method 5a" }, position },
  {
    id: "e12",
    source: "1",
    target: "2",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  {
    id: "e23",
    source: "2",
    target: "3",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  // {
  //   id: "e18",
  //   source: "2",
  //   target: "8",
  //   type: edgeType,
  //   arrowHeadType: "",
  // },
  {
    id: "e34",
    source: "3",
    target: "4",
    label: 'smooth step edge',
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
 {
    id: "e45",
    source: "4",
    target: "5",
    type: edgeType,
   
    animated: true
  },

  // {
  //   id: "e22a",
  //   source: "2",
  //   target: "2a",
  //   type: edgeType,
  //   arrowHeadType: "arrowclosed",
  // },
  {
    id: "e56",
    source: "5",
    target: "6",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  {
    id: "e67",
    source: "6",
    target: "7",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  {
    id: "e1a21",
    source: "1a",
    target: "2a",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  {
    id: "e2a3a",
    source: "2a",
    target: "3a",
    type: edgeType,
  
    animated: true
  },
  {
    id: "e3a4a",
    source: "3a",
    target: "4a",
    type: edgeType,
 
    animated: true
  },
  {
    id: "e4a5a",
    source: "4a",
    target: "5a",
    type: edgeType,
    animated: true
  },
  {
    id: "e45a",
    source: "4",
    target: "3a",
    type: edgeType,
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e24",
    source: "2",
    target: "4",
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

