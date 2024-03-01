import React, { useEffect } from "react";

function Meet() {
  useEffect(() => {
    console.log(document.getElementsByName("meeting"));
  }, []);
  return (
    <div className="min-h-screen overflow-auto">
      <iframe
        id="iframe"
        width="100%"
        scrolling="no"
        className="h-[1150px] overflow-hidden static"
        src="https://www.experte.com/online-meeting?join=0swDpa4zl4"
        // allow="camera;microphone"
        allow="camera;microphone;fullscreen"
        frameborder="0"
      ></iframe>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dicta, ad
      quam, explicabo doloremque odit minus unde libero dignissimos atque
      consequatur voluptates, perspiciatis voluptas numquam odio modi laborum
      non veniam.
    </div>
  );
}

export default Meet;
