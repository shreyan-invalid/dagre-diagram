import { Position, ArrowHeadType } from 'react-flow-renderer';
import {initial_Elements_1}from './initial-elements';

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(intersectionNode , targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    position: intersectionNodePosition,
  } = intersectionNode.__rf;
  const targetPosition = targetNode.__rf.position;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + w;
  const y1 = targetPosition.y + h;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(node, intersectionPoint) {
  const n = { ...node.__rf.position, ...node.__rf };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.height - 1) {
    return Position.Bottom;
  }

  return Position.Top;
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}

export function createElements() {
  const elements = [];
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  // elements.push({ id: 'target', data: { label: 'Target' }, position: center });

  const array= ["Class1", "Method1", "Method2", "Method3", "Method4", "Method5", "Method6", "Method7"]

  initial_Elements_1.forEach((el) => {
    const degrees = 90;
    const radians = degrees * (Math.PI / 180);
    // const x = 250 * Math.sin(radians) + center.x;
    // const y = 250 * Math.sin(radians) + center.y;
    const x = 0;
    const y = 0;

    elements.push({ id: `${"2"}`, data: { label: el.label }, position: { x, y } });

    elements.push({
      id: `edge-${"1"}`,
      target: `${Math.floor(Math.random()*8)}`,
      source: `${"1"}`,
      label: 'edges',
      type: 'floating',
      arrowHeadType: ArrowHeadType.Arrow,
      labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
    });
  }) 

  return elements;
}