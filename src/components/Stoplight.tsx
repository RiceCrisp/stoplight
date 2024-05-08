import { useEffect, useRef, useState } from "react";
import { Pattern } from "../constants";

type StopLightProps = Readonly<{
  lights?: Pattern["lights"];
  sequence?: Pattern["sequence"];
}>;

export function StopLight({ lights = {}, sequence = [] }: StopLightProps) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [on, setOn] = useState<string[]>([]);

  const turnOnLights = (colors: string[] | "off", duration: number) => {
    setOn(colors === "off" ? [] : colors);
    return new Promise<void>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve();
      }, duration);
    });
  };

  useEffect(() => {
    (async () => {
      let index = 0;
      while (sequence.length) {
        const step = sequence[index];
        await turnOnLights(step.colors, step.duration);
        index = index >= sequence.length - 1 ? 0 : index + 1;
      }
    })();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [sequence]);

  const slots = [];

  const totalSlots = Object.entries(lights).reduce((p, [, c]) => {
    return c.position > p ? c.position : p;
  }, 0);

  for (let i = 0; i < totalSlots; i++) {
    slots.push(i + 1);
  }

  return (
    <div className="stoplight">
      {slots.map((i) => (
        <div className="slot" key={i}>
          {Object.entries(lights)
            .filter(([, light]) => light.position === i)
            .map(([id, light]) => {
              const name = id.replace(/([A-Z])/g, " $1");
              return (
                <div
                  key={id}
                  className={`light ${on.includes(id) && "on"}`}
                  style={{ backgroundColor: light.color }}
                >
                  <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
