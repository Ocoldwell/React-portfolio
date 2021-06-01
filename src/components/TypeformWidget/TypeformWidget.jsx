import React, { useEffect, useRef } from "react";
import { createPopover } from "@typeform/embed";
import "@typeform/embed/build/css/popover.css";

const TypeformWidget = () => {
  const container = useRef();

  useEffect(() => {
    createPopover("CuHGv6hX", {
      container: container.current,
      hideFooter: true,
      hideHeaders: true,
      opacity: 90,
      tooltip: "Send me a message here"
    });
  }, []);

  return <div ref={container} />;
};

export default TypeformWidget;
