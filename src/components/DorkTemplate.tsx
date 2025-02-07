
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
      title: "Copied to clipboard",
      description: "The dork query has been copied to your clipboard.",
    });
  };

  return (
    <Card className="p-4 backdrop-blur-sm bg-white/30 hover:bg-white/40 transition-all duration-300 border border-gray-200 group animate-slide-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <code className="block p-2 bg-gray-100 rounded text-sm mb-3 overflow-x-auto">
        {query}
      </code>
      <Button
        onClick={() => onSelect(query)}
        variant="outline"
        className="w-full hover:bg-gray-100 transition-colors"
      >
        Use Template
      </Button>
    </Card>
  );
};
