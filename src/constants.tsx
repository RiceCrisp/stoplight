export type Pattern = {
  name: string;
  lights: Record<string, { position: number; color: string }>;
  sequence: { colors: string[] | "off"; duration: number }[];
};

export const patterns: Pattern[] = [
  {
    name: "Standard",
    lights: {
      red: { position: 1, color: "red" },
      yellow: { position: 2, color: "yellow" },
      green: { position: 3, color: "green" },
    },
    sequence: [
      { colors: ["green"], duration: 3000 },
      { colors: ["yellow"], duration: 1000 },
      { colors: ["red"], duration: 2000 },
    ],
  },
  {
    name: "Emergency",
    lights: {
      red: { position: 1, color: "red" },
      yellow: { position: 2, color: "yellow" },
      green: { position: 3, color: "green" },
    },
    sequence: [
      { colors: ["red"], duration: 1000 },
      { colors: "off", duration: 1000 },
    ],
  },
  {
    name: "Protected Turn",
    lights: {
      red: { position: 1, color: "red" },
      yellow: { position: 2, color: "yellow" },
      green: { position: 3, color: "green" },
      specialGreen: { position: 4, color: "#20F7B2" },
    },
    sequence: [
      { colors: ["red"], duration: 1000 },
      { colors: ["yellow"], duration: 1000 },
      { colors: ["specialGreen"], duration: 5000 },
    ],
  },
  {
    name: "Party Time",
    lights: {
      red: { position: 1, color: "red" },
      purple: { position: 3, color: "purple" },
      green: { position: 3, color: "green" },
      orange: { position: 3, color: "orange" },
    },
    sequence: [
      { colors: ["red", "orange"], duration: 500 },
      { colors: ["purple", "green"], duration: 500 },
      { colors: ["purple", "orange", "green"], duration: 500 },
      { colors: ["purple", "orange", "green", "red"], duration: 500 },
    ],
  },
];
