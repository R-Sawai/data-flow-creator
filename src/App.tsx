import { type FC } from "react";
import { MermaidView } from "./components/mermaid-view";
import { AppNavbar } from "./components/app-navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import mermaid from "mermaid";

export const App: FC = () => {
  const handleRenderChart = async (chartText: string) => {
    try {
      await mermaid.parse(chartText);
      const { svg } = await mermaid.render("mermaid-svg-id", chartText);
      return svg;
    } catch (err) {
      console.error("Mermaid render error: ", err);
      return "";
    }
  };

  return (
    <div>
      <AppNavbar title="Data Flow Creator"></AppNavbar>

      <Tabs defaultValue="mermaid">
        <main className="min-h-[90svh] p-6">
          <TabsContent value="mermaid" className="space-y-4">
            <MermaidView handleRenderChart={handleRenderChart} />
          </TabsContent>

          <TabsContent value="ai"></TabsContent>
        </main>

        <footer className="pointer-events-none sticky bottom-6 z-10 flex items-center justify-center">
          <TabsList className="pointer-events-auto shadow">
            <TabsTrigger value="mermaid">mermaid</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
          </TabsList>
        </footer>
      </Tabs>
    </div>
  );
};
