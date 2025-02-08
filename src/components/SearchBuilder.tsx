
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
    <form onSubmit={handleSearch} className="w-full space-y-4 animate-slide-in">
      <div className="relative">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Masukkan kueri pencarian Anda..."
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent transition-all duration-200 bg-background dark:bg-background/50 text-foreground dark:text-gray-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
      >
        Cari <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};
