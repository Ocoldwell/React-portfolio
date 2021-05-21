import React, { useEffect, useRef } from "react";
import {createPopover} from '@typeform/embed';
import "@typeform/embed/build/css/popover.css";

const TypeformWidget = () => {
  const container = useRef();
  const options = {
    container: container.current,
    hideFooter: true,
    hideHeaders: true,
  }
  useEffect(() => {
    createPopover("CuHGv6hX", options)
  }, [])

  return (
    <div ref={container} />
  );
};

export default TypeformWidget;
