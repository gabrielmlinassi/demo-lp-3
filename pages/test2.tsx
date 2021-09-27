import { useState } from "react";
import cn from "classnames";

export default function Test2() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div>
      <div
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="w-96 h-96 border-2"
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: isHovering ? "rotateY(180deg)" : "none",
          }}
          className="relative w-full h-full transition-transform duration-700"
        >
          <div
            style={{
              backfaceVisibility: "hidden",
            }}
            className="absolute w-full h-full bg-yellow-200"
          >
            front
          </div>
          <div
            style={{
              transform: "rotateY(180deg)",
            }}
            className="absolute w-full h-full bg-red-500"
          >
            back
          </div>
        </div>
      </div>
    </div>
  );
}
