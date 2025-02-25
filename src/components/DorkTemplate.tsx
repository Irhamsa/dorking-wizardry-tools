
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface DorkTemplateProps {
  title: string;
  description: string;
  query: string;
  onSelect: (query: string) => void;
}

export const DorkTemplate = ({ title, description, query, onSelect }: DorkTemplateProps) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(query);
    toast({
      title: "Disalin ke clipboard",
      description: "Kueri dork telah disalin ke clipboard Anda.",
    });
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl p-4 backdrop-blur-sm bg-white/30 dark:bg-black/30 hover:bg-white/40 dark:hover:bg-black/40 border border-border animate-fade-in hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-foreground dark:text-white">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground dark:text-gray-300 mb-3">{description}</p>
      <code className="block p-2 bg-muted dark:bg-black/50 rounded text-sm mb-3 overflow-x-auto text-foreground dark:text-gray-200 transition-colors duration-300 group-hover:bg-accent/20">
        {query}
      </code>
      <Button
        onClick={() => onSelect(query)}
        variant="outline"
        className="w-full hover:bg-accent dark:hover:bg-accent/20 transition-all duration-300 hover:scale-105"
      >
        Gunakan Template
      </Button>
    </Card>
  );
};
