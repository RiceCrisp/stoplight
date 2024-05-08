import { useEffect, useRef, useState } from "react";

const config = [
  { color: "green", duration: 5000 },
  { color: "yellow", duration: 1000 },
  { color: "red", duration: 2000 },
];

export function StopLight() {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [on, setOn] = useState("");

  const turnOnLight = (color: string, duration: number) => {
    setOn(color);
    return new Promise<void>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve();
      }, duration);
    });
  };

  useEffect(() => {
    (async () => {
      let index = 0;
      while (true) {
        const step = config[index];
        await turnOnLight(step.color, step.duration);
        index = index >= config.length - 1 ? 0 : index + 1;
      }
    })();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="stoplight">
      <div className={`light red ${on === "red" && "on"}`}>
        <span>Red</span>
      </div>
      <div className={`light yellow ${on === "yellow" && "on"}`}>
        <span>Yellow</span>
      </div>
      <div className={`light green ${on === "green" && "on"}`}>
        <span>Green</span>
      </div>
    </div>
  );
}
