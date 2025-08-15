import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Brush } from "lucide-react";

interface MermaidViewProps {
  handleRenderChart: (text: string) => Promise<string>;
}

export const MermaidView: React.FC<MermaidViewProps> = (props) => {
  const [chartText, setChartText] = useState(
    `%% Mermaid記法
    graph TD
    A[Start] --> B{Condition?}
    B -- Yes --> C[Do Something]
    B -- No --> D[Do Other]`.trim(),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Label htmlFor="chart-text" className="text-base">
        Mermaid
      </Label>

      <Textarea
        id="chart-text"
        value={chartText}
        onChange={(e) => setChartText(e.target.value)}
        className="min-h-[30svh]"
      ></Textarea>

      {/* 生成ボタン */}
      <div className="sticky bottom-6 h-10 w-full">
        <Button
          variant="outline"
          onClick={async () => {
            containerRef.current &&
              (containerRef.current.innerHTML =
                await props.handleRenderChart(chartText));
          }}
          className="absolute right-0 left-0 h-fit rounded-full"
        >
          <Brush className="size-6" />
          <div className="text-base">Generate!</div>
        </Button>
      </div>

      {/* SVG表示部分 */}
      <div className="h-full w-full overflow-scroll rounded-md border p-4 shadow">
        <div ref={containerRef} />
      </div>
    </>
  );
};
