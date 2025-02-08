
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
      <div className="inline-flex items-center gap-1 animate-fade-in">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onClick(operator)}
          className="px-3 py-1 rounded-full hover:bg-accent dark:hover:bg-accent/20 transition-colors text-foreground dark:text-gray-200"
        >
          {operator}
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-popover dark:bg-popover/90 text-popover-foreground">
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
