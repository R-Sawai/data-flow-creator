import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidViewProps = {
  chart: string;
};

export const MermaidView: React.FC<MermaidViewProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default", // darkなども可
    });

    const renderChart = async () => {
      try {
        const { svg } = await mermaid.render("mermaid-svg-id", chart);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };

    renderChart();
  }, [chart]);

  return <div ref={containerRef} />;
};
