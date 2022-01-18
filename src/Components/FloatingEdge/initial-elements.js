import "./style.css";

const position = { x: 0, y: 0 };
const edgeType = "straight";
const style = {
  color: "#333",
  border: "1px solid #222138",
  width: 270,
  height: 100,
  overflow: "hidden",
};

const edgeStyle= {
   stroke: '#ED2939' ,
   strokeWidth: 4
}

export const initial_Elements_1 = [
  {
    id: "1",
    type: "default",
    data: {
      label: (
        <div className="classContainer">
          <strong>Class 1</strong>
        </div>
      ),
      target: "2",
    },
    position,
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: 270,
      height: 50,
    },
  },
  {
    id: "2",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 2</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
      target: "3",
    },
    position,
    style: style,
  },
  {
    id: "3",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 5</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
      target: ["2a", "2b"],
    },
    position,
    style: style,
  },
  {
    id: "4",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 4</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "5",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 5</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "6",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 6</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "7",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 7</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "1a",
    type: "default",
    data: {
      label: (
        <div className="classContainer">
          <strong>Class 2</strong>
        </div>
      ),
      target: "2",
    },
    position,
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: 270,
      height: 50,
    },
  },
  {
    id: "2a",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 2a</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Void</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "3a",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 3a</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "4a",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 4a</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },

  {
    id: "5a",
    data: {
      label: (
        <div className="methodContainer">
          <div className="methodContainer__title">
            <p>Method 5a</p>
          </div>

          <div className="methodContainer__data">
            <div className="methodContainer__data__detail">
              <p>
                Params: <strong>length, breadth, height</strong>
              </p>
            </div>
            <div className="methodContainer__data__detail">
              <p>
                Returns: <strong>Volume</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    position,
    style: style,
  },
  {
    id: "e12",
    source: "1",
    target: "2",
    type: edgeType,
    arrowHeadType: "",
    animated: true,
    label: 'volume'
  },
  {
    id: "e23",
    source: "2",
    target: "3",
    type: edgeType,
    arrowHeadType: "",
    animated: true,
  },
  // // {
  // //   id: "e18",
  // //   source: "2",
  // //   target: "8",
  // //   type: edgeType,
  // //   arrowHeadType: "",
  // // },
  {
    id: "e34",
    source: "3",
    target: "4",
    label: "smooth step edge",
    type: edgeType,
    arrowHeadType: "",
    animated: true
  },
  {
    id: "e45",
    source: "4",
    target: "5",
    type: edgeType,
    style: edgeStyle,
    animated: true,
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
    animated: true,
  },
  {
    id: "e67",
    source: "6",
    target: "7",
    type: edgeType,
    arrowHeadType: "",
    animated: true,
  },
  {
    id: "e1a21",
    source: "1a",
    target: "2a",
    type: edgeType,
    arrowHeadType: "",
    animated: true,
  },
  {
    id: "e2a3a",
    source: "2a",
    target: "3a",
    type: edgeType,

    animated: true,
  },
  {
    id: "e3a4a",
    source: "3a",
    target: "4a",
    type: edgeType,

    animated: true,
  },
  {
    id: "e4a5a",
    source: "4a",
    target: "5a",
    type: edgeType,
    animated: true,
  },
  {
    id: "e45a",
    source: "4",
    target: "5a",
    type: edgeType,
    arrowHeadType: "arrowclosed",
    style: edgeStyle,
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

export const initialMethods = [
  {
    name: "",
    className: "",
    lineNumber: "94",
    accessModifier: "public",
    arguments: ["Integer"], //array of strings- dataType
    returnType: [], //array of strings- dataType
    toNodes: [{ nodeName: "", nodeId: "4", className: "" }, {}], //edges leading to the node.
    fromEdges: [{ nodeName: "", nodeId: "5", className: "" }, {}], //edges leading out from the node.
  },
];
