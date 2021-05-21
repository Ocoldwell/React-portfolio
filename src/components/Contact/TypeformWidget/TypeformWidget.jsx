import React, { useEffect, useRef } from "react";
import * as typeformEmbed from "@typeform/embed";

const TypeformWidget = ({
  link = "https://n98f2afvvv9.typeform.com/to/CuHGv6hX",
  hideFooter = true,
  hideHeaders = true,
  opacity = 90,
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    typeformEmbed.createPopover(elementRef.current, link, {
      hideFooter,
      hideHeaders,
      opacity,
    });
  }, [link]);
  return (
    <div
      ref={elementRef}
      style={{ width: "100%", height: "100%", flex: "1 1 auto" }}
    ></div>
  );
};

export default TypeformWidget;
