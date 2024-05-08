import { useState } from "react";
import { PatternSelect } from "./components/PatternSelect";
import { StopLight } from "./components/Stoplight";
import { Pattern, patterns } from "./constants";

function App() {
  const [pattern, setPattern] = useState<Pattern>(patterns[0]);
  const [patternIndex, setPatternIndex] = useState(0);

  return (
    <div className="app">
      <StopLight lights={pattern?.lights} sequence={pattern?.sequence} />
      <PatternSelect
        onChange={(pattern, index) => {
          setPattern(pattern);
          setPatternIndex(index);
        }}
        value={patternIndex}
      />
    </div>
  );
}

export default App;
