"use client";

import React, { useEffect } from "react";

const LocomotiveScroll = () => {
  useEffect(() => {
    let scroll;

    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

    // Cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <></>;
};

export default LocomotiveScroll;
