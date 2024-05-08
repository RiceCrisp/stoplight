import { Pattern, patterns } from "../constants";

type PatternSelectProps = Readonly<{
  onChange: (pattern: Pattern, index: number) => void;
  value: number;
}>;

export function PatternSelect({ onChange, value }: PatternSelectProps) {
  return (
    <select
      onChange={(e) => {
        const index = Number(e.target.value);
        const pattern = patterns[index];
        onChange(pattern, index);
      }}
      value={value}
    >
      {patterns.map(({ name }, index) => {
        return (
          <option key={name} value={index}>
            {name}
          </option>
        );
      })}
    </select>
  );
}
