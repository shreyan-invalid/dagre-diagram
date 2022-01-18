import React, { useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
} from 'react-flow-renderer';
import dagre from 'dagre';

import initialElements from './initial-elements';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

// In order to keep this example simple the node width and height are hardcoded.
// In a real world app you would use the correct width and height values of
// const nodes = useStoreState(state => state.nodes) and then node.__rf.width, node.__rf.height

const nodeWidth = 172;
const nodeHeight = 73;

const getLayoutedElements = (elements, direction = 'BR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
    } else {
      dagreGraph.setEdge(el.source, el.target, );
    }
  });

  dagre.layout(dagreGraph);
  var yVal= 100;
  return elements.map((el) => {
    
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isHorizontal ? 'left' : 'top';
      el.sourcePosition = isHorizontal ? 'right' : 'bottom';

      // unfortunately we need this little hack to pass a slightly different position
      // to notify react flow about the change. Moreover we are shifting the dagre node position
      // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
      el.position = {
        x: nodeWithPosition.x - nodeWidth/2 + Math.random() / 1000,
        y:  nodeWithPosition.x - nodeHeight/2
      };
    }

    return el;
  });
};

const layoutedElements = getLayoutedElements(initialElements);

const LayoutFlow = () => {
  const [elements, setElements] = useState(layoutedElements);
  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: 'floating', animated: true }, els)
    );
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },
    [elements]
  );

  const style = {
    width: '100%',
    height: '90vh',
  };

  return (
    <div className="layoutflow">
      <ReactFlowProvider>
        <ReactFlow
          style={style}
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          connectionLineType="smoothstep"
        />
        <div className="controls">
          <button onClick={() => onLayout('BR')}>vertical layout</button>
          <button onClick={() => onLayout('LR')}>horizontal layout</button>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default LayoutFlow;