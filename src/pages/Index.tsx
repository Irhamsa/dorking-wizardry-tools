
import { useState } from "react";
import { SearchBuilder } from "@/components/SearchBuilder";
import { DorkTemplate } from "@/components/DorkTemplate";
import { OperatorChip } from "@/components/OperatorChip";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  { operator: "-", description: "Mengecualikan istilah" },
  { operator: "OR", description: "Cocok dengan salah satu istilah" },
  { operator: "\"\"", description: "Pencarian kata persis" },
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900">Alat Google Dorking</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Buat kueri pencarian Google tingkat lanjut dengan alat dorking kami yang mudah digunakan.
            Pilih operator, gunakan template, atau buat pencarian kustom Anda sendiri.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
          <SearchBuilder onSearch={handleSearch} />
          
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-700">Operator</h2>
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
          <h2 className="text-xl font-semibold text-gray-900">Template Umum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dorkTemplates.map((template) => (
              <DorkTemplate
                key={template.title}
                {...template}
                onSelect={handleSearch}
              />
            ))}
          </div>
        </div>

        {searchHistory.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Riwayat Pencarian</h2>
            <ScrollArea className="h-40 rounded-md border p-4">
              {searchHistory.map((query, index) => (
                <div
                  key={index}
                  className="py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                  onClick={() => handleSearch(query)}
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
