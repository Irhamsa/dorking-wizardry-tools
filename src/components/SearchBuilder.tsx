
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
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 transition-all duration-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
      <Button
        type="submit"
        className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200"
      >
        Cari <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};
