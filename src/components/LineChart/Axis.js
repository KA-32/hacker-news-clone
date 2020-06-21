import React, { useRef, useEffect } from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";
import { transition } from "d3-transition";

const Axis = (props) => {
  const { orient, transform } = props;
  const myRef = useRef();

  useEffect(() => {
    renderAxis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAxis = () => {
    const { scale, orient, ticks } = props;
    const node = myRef.current;
    let axis;
    if (orient === "bottom") {
      axis = axisBottom(scale);
    }
    if (orient === "left") {
      axis = axisLeft(scale).ticks(ticks);
    }
    select(node).call(axis);
  };

  useEffect(() => {
    const { scale, orient, ticks } = props;
    const t = transition().duration(1000);
    if (orient === "bottom") {
      const node = myRef.current;
      const axis = axisBottom(scale);
      select(node).call(axis);
    }
    if (orient === "left") {
      const axis = axisLeft(scale).ticks(ticks);
      selectAll(`.${orient}`).transition(t).call(axis);
    }
  }, [props, props.scale, props.orient, props.ticks]);

  return <g ref={myRef} transform={transform} className={`${orient} axis`} />;
};

export default Axis;
