
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

interface SearchBuilderProps {
  onSearch: (query: string) => void;
}

export const SearchBuilder = ({ onSearch }: SearchBuilderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full space-y-4 animate-fade-in">
      <div className="relative group">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Masukkan kueri pencarian Anda..."
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent transition-all duration-300 bg-background/50 dark:bg-background/30 text-foreground dark:text-gray-200 hover:shadow-md group-hover:border-accent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
      >
        Cari <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};
