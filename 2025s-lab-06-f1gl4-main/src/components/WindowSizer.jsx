import { useState, useEffect } from "react";

export function WindowSizer() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // TODO: write an useEffect hook that will update the width and height every time the window resizes
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return (
    <div>
      <div>
        Window size is {width}x{height}
      </div>
    </div>
  );
}
