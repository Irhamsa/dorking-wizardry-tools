
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OperatorChipProps {
  operator: string;
  description: string;
  onClick: (operator: string) => void;
}

export const OperatorChip = ({ operator, description, onClick }: OperatorChipProps) => {
  return (
    <TooltipProvider>
      <div className="inline-flex items-center gap-1 animate-fade-in hover:scale-105 transition-all duration-300">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onClick(operator)}
          className="px-3 py-1 rounded-full hover:bg-accent dark:hover:bg-accent/20 transition-all duration-300 text-foreground dark:text-gray-200 hover:shadow-md"
        >
          {operator}
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 hover:scale-110 transition-transform duration-300">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-popover/95 dark:bg-popover/90 text-popover-foreground backdrop-blur-sm animate-fade-in">
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
