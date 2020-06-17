import React from 'react';

function TaskProps(props) {
   return (
      <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
         <p>Speed: {props.func}</p>
         <p>Objects: {props.objects}</p>
      </div>
   )
};

export default TaskProps;