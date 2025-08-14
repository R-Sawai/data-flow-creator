import type { FC } from "react";
import { MermaidView } from "./components/mermaid-view";

export const App: FC = () => {
  const chart = `
  %% Mermaid記法
  graph TD
    A[Start] --> B{Condition?}
    B -- Yes --> C[Do Something]
    B -- No --> D[Do Other]
  `;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mermaid in React</h1>
      <MermaidView chart={chart} />
    </div>
  );
};
