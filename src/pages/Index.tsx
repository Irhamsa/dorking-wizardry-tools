import { useState } from "react";
import { SearchBuilder } from "@/components/SearchBuilder";
import { DorkTemplate } from "@/components/DorkTemplate";
import { OperatorChip } from "@/components/OperatorChip";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, Trash2 } from "lucide-react";

const dorkTemplates = [
  {
    title: "Cari File PDF",
    description: "Mencari dokumen PDF di situs tertentu",
    query: 'site:example.com filetype:pdf',
  },
  {
    title: "Direktori Terbuka",
    description: "Menemukan daftar direktori yang terbuka",
    query: 'intitle:"index of" "parent directory"',
  },
  {
    title: "File Konfigurasi",
    description: "Mencari file konfigurasi",
    query: 'filetype:conf OR filetype:config OR filetype:env',
  },
  {
    title: "Halaman Login",
    description: "Menemukan portal login",
    query: 'inurl:login OR inurl:signin OR inurl:admin',
  },
];

const operators = [
  { operator: "site:", description: "Membatasi pencarian ke domain tertentu" },
  { operator: "filetype:", description: "Mencari tipe file tertentu" },
  { operator: "inurl:", description: "Mencari di URL" },
  { operator: "intitle:", description: "Mencari di judul halaman" },
  { operator: "intext:", description: "Mencari di teks halaman" },
  { operator: "cache:", description: "Melihat versi cache halaman" },
  { operator: "ext:", description: "Mencari ekstensi file tertentu" },
  { operator: "related:", description: "Mencari situs terkait" },
  { operator: "info:", description: "Informasi tentang URL" },
  { operator: "define:", description: "Mencari definisi" },
  { operator: "before:", description: "Sebelum tanggal tertentu" },
  { operator: "after:", description: "Setelah tanggal tertentu" },
  { operator: "-", description: "Mengecualikan istilah" },
  { operator: "OR", description: "Cocok dengan salah satu istilah" },
  { operator: "AND", description: "Harus mengandung semua istilah" },
  { operator: "\"\"", description: "Pencarian kata persis" },
  { operator: "allinurl:", description: "Mencari halaman dengan semua kata kunci di URL" },
  { operator: "allintitle:", description: "Mencari halaman dengan semua kata kunci di judul" },
  { operator: "allintext:", description: "Mencari halaman dengan semua kata kunci di teks" },
  { operator: "AROUND(n)", description: "Mencari kata yang berjarak n kata dari kata lain" },
  { operator: "source:", description: "Mencari dari sumber berita tertentu" },
  { operator: "location:", description: "Mencari berdasarkan lokasi" },
  { operator: "$", description: "Mencari harga/angka" },
  { operator: "..", description: "Mencari range angka (contoh: 100..200)" },
  { operator: "@", description: "Mencari di media sosial" }
];

const Index = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchHistory((prev) => [query, ...prev]);
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
    
    toast({
      title: "Pencarian dijalankan",
      description: "Membuka pencarian Google di tab baru",
    });
  };

  const handleOperatorClick = (operator: string) => {
    document.querySelector('input')?.focus();
    const input = document.querySelector('input') as HTMLInputElement;
    if (input) {
      const cursorPos = input.selectionStart || 0;
      const currentValue = input.value;
      const newValue = currentValue.slice(0, cursorPos) + operator + currentValue.slice(cursorPos);
      input.value = newValue;
      const newCursorPos = cursorPos + operator.length;
      input.setSelectionRange(newCursorPos, newCursorPos);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
    toast({
      title: "Riwayat dibersihkan",
      description: "Semua riwayat pencarian telah dihapus",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-fade-in">
              Alat Google Dorking
            </h1>
            <Link to="/documentation">
              <Button variant="outline" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Book className="h-4 w-4" />
                Dokumentasi
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Buat kueri pencarian Google tingkat lanjut dengan alat dorking kami yang mudah digunakan.
            Pilih operator, gunakan template, atau buat pencarian kustom Anda sendiri.
          </p>
        </div>

        <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 space-y-6 animate-fade-in">
          <SearchBuilder onSearch={handleSearch} />
          
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-foreground dark:text-white">Operator</h2>
            <div className="flex flex-wrap gap-2">
              {operators.map((op) => (
                <OperatorChip
                  key={op.operator}
                  operator={op.operator}
                  description={op.description}
                  onClick={handleOperatorClick}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground dark:text-white animate-fade-in">Template Umum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dorkTemplates.map((template, index) => (
              <div key={template.title} style={{ animationDelay: `${index * 100}ms` }}>
                <DorkTemplate
                  {...template}
                  onSelect={handleSearch}
                />
              </div>
            ))}
          </div>
        </div>

        {searchHistory.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">Riwayat Pencarian</h2>
              <Button
                variant="outline"
                onClick={clearHistory}
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-destructive hover:text-destructive-foreground"
              >
                <Trash2 className="h-4 w-4" />
                Bersihkan Riwayat
              </Button>
            </div>
            <ScrollArea className="h-40 rounded-md border p-4 bg-card/50 dark:bg-card/30 backdrop-blur-sm">
              {searchHistory.map((query, index) => (
                <div
                  key={index}
                  className="py-2 px-3 hover:bg-accent dark:hover:bg-accent/20 rounded-md cursor-pointer transition-all duration-300 text-foreground dark:text-gray-200 hover:translate-x-1"
                  onClick={() => handleSearch(query)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {query}
                </div>
              ))}
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
