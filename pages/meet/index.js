import React, { useEffect } from "react";

function Meet() {
  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);
  return (
    <div className="min-h-screen overflow-auto pt-14 relative">
      <div className="relative">
        <iframe
          id="iframe"
          width="100%"
          scrolling="no"
          className="h-[1150px] overflow-hidden -translate-y-[300px]"
          src="https://www.experte.com/online-meeting?join=0swDpa4zl4"
          // allow="camera;microphone, screen;fullscreen"
          allow="camera;microphone;fullscreen;display-capture"
          frameborder="0"
        ></iframe>
        <div className="absolute h-44 bg-white border-b -top-36 inset-x-0"></div>
      </div>
    </div>
  );
}

export default Meet;
