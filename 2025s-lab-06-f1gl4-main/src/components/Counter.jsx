import React, {useState} from "react";

function Counter() {
  // TODO: Change the component to use state
  const [internalCount, setInternalCounter] = useState(0);

  return (
    <div>
      {/* Notice that we can add padding or other CSS styling to components */}
      <div style={{ padding: 5 }}>Counter is: {internalCount}</div>
      <button
        onClick={() => setInternalCounter(internalCount + 1)}
      >
        Click to increment
      </button>

      <button
        onClick={() => setInternalCounter(internalCount * 2)}
      >
        Click to double
      </button>
    </div>
  );
}

export { Counter };
