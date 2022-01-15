import React, { useState } from "react";
import dagre from "dagre";

import ReactFlow, {
  removeElements,
  addEdge,
  Background,
  ArrowHeadType,
  isNode,
} from "react-flow-renderer";

import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
import { createElements } from "./utils";

import { initial_Elements_1 } from "./initial-elements";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const edgeTypes = {
  floating: FloatingEdge,
};

const nodeWidth = 172;
const nodeHeight = 73;

const getLayoutedElements = (elements, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });
  dagre.layout(dagreGraph);
  
  return elements.map((el) => {
    
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? "right" : "left";
      el.sourcePosition = isHorizontal ? "top" : "bottom";

      // unfortunately we need this little hack to pass a slightly different position
      // to notify react flow about the change. Moreover we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      const refEl= elements.find((reqEl) => reqEl.id === el.data.target);
      el.position = {
        x: nodeWithPosition.x - nodeWidth/2 + Math.random()/1000,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return el;
  });
};

const initialElements = getLayoutedElements(initial_Elements_1);

const NodeAsHandleFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) =>
    setElements((els) =>
      addEdge(
        { ...params, type: "floating", arrowHeadType: ArrowHeadType.Arrow },
        els
      )
    );

  const style = {
    width: "100%",
    height: "90vh",
  };

  return (
    <div className="floatingedges">
      <ReactFlow
        style={style}
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        edgeTypes={edgeTypes}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
