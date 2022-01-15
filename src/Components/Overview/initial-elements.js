import React from 'react';

export default [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
         <strong>Class 1</strong>
        </>
      ),
    },
    position: { x: 100, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
           <strong>method_1</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          <strong>method_2</strong>
        </>
      ),
    },
    position: { x: 100, y: 200 },
    // style: {
    //   background: '#D6D5E6',
    //   color: '#333',
    //   border: '1px solid #222138',
    //   width: 180,
    // },
  },
  {
    id: '4',
    position: { x: 100, y: 300 },
    data: {
      label: 'method_3',
    },
  },
  {
    id: '5',
    data: {
      label: 'method_4',
    },
    position: { x: 100, y: 425 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    position: { x: 100, y: 550 },
  },
  {
    id: '7',
    type: 'default',
    data: { label: 'method_5' },
    position: { x: 400, y:300  },
    targetPosition: 'left',
    sourcePosition: 'top',
  },
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label', animated: true },
  { id: 'e1-3', source: '2', target: '3' , animated: true},
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: 'edge with arrow head',
    animated: true,
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
    animated: true,
  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    type: 'smoothstep',
    arrowHeadType: 'arrowclosed',
   
    // animated: true,
    // labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
];