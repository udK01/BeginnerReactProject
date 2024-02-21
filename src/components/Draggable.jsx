import React, { useState, useRef } from "react";

const Draggable = () => {
  const draggableRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    const rect = draggableRef.current.getBoundingClientRect();
    setDragging(true);
    setOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const rect = draggableRef.current.getBoundingClientRect();
      const x = event.clientX - offset.x;
      const y = event.clientY - offset.y;
      draggableRef.current.style.left = `${x}px`;
      draggableRef.current.style.top = `${y}px`;
    }
  };

  return (
    <div
      ref={draggableRef}
      className="draggable"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      Drag me!
    </div>
  );
};

export default Draggable;
