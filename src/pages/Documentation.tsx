
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Dokumentasi Google Dork</h1>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Pengantar</h2>
              <p className="text-muted-foreground">
                Google Dorking adalah teknik pencarian lanjutan menggunakan operator khusus Google
                untuk menemukan informasi spesifik yang mungkin tidak mudah ditemukan melalui
                pencarian biasa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Operator Google Dork</h2>
              <div className="grid gap-4">
                {operatorExplanations.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border"
                  >
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {item.operator}
                    </h3>
                    <p className="text-muted-foreground">{item.explanation}</p>
                    <div className="mt-2">
                      <h4 className="font-medium text-card-foreground">Contoh:</h4>
                      <code className="block p-2 bg-muted rounded mt-1 text-sm text-muted-foreground">
                        {item.example}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Peringatan Keamanan</h2>
              <p className="text-muted-foreground">
                Gunakan Google Dorking secara bertanggung jawab dan etis. Jangan menggunakan
                teknik ini untuk mengakses informasi pribadi atau sistem tanpa izin.
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const operatorExplanations = [
  {
    operator: "site:",
    explanation: "Membatasi pencarian ke domain atau situs web tertentu.",
    example: "site:example.com kata_kunci",
  },
  {
    operator: "filetype:",
    explanation: "Mencari file dengan tipe tertentu.",
    example: "filetype:pdf panduan_pengguna",
  },
  {
    operator: "inurl:",
    explanation: "Mencari halaman dengan kata kunci tertentu dalam URL.",
    example: "inurl:login",
  },
  {
    operator: "intitle:",
    explanation: "Mencari halaman dengan kata kunci tertentu dalam judul.",
    example: 'intitle:"halaman admin"',
  },
  {
    operator: "intext:",
    explanation: "Mencari halaman dengan kata kunci tertentu dalam isi konten.",
    example: 'intext:"informasi rahasia"',
  },
  {
    operator: "cache:",
    explanation: "Menampilkan versi cache Google dari sebuah situs web.",
    example: "cache:website.com",
  },
  {
    operator: "ext:",
    explanation: "Mencari file dengan ekstensi tertentu (sama seperti filetype:).",
    example: "ext:pdf dokumen_penting",
  },
  {
    operator: "related:",
    explanation: "Menemukan situs web yang terkait dengan URL tertentu.",
    example: "related:google.com",
  },
  {
    operator: "info:",
    explanation: "Mendapatkan informasi tentang URL tertentu.",
    example: "info:website.com",
  },
  {
    operator: "define:",
    explanation: "Mencari definisi kata atau frasa.",
    example: "define:cybersecurity",
  },
  {
    operator: "before:",
    explanation: "Mencari halaman yang diindeks sebelum tanggal tertentu.",
    example: "before:2023-01-01 berita",
  },
  {
    operator: "after:",
    explanation: "Mencari halaman yang diindeks setelah tanggal tertentu.",
    example: "after:2023-01-01 berita",
  },
  {
    operator: "OR",
    explanation: "Mencari salah satu dari beberapa kata kunci.",
    example: "cybersecurity OR keamanan",
  },
  {
    operator: "AND",
    explanation: "Mencari halaman yang mengandung semua kata kunci.",
    example: "keamanan AND privasi",
  },
  {
    operator: "-",
    explanation: "Mengecualikan kata kunci dari hasil pencarian.",
    example: "keamanan -virus",
  },
  // Operator baru
  {
    operator: "allinurl:",
    explanation: "Mencari halaman yang memiliki semua kata kunci yang ditentukan dalam URL-nya.",
    example: "allinurl:login admin panel",
  },
  {
    operator: "allintitle:",
    explanation: "Mencari halaman yang memiliki semua kata kunci yang ditentukan dalam judulnya.",
    example: "allintitle:forum diskusi keamanan",
  },
  {
    operator: "allintext:",
    explanation: "Mencari halaman yang memiliki semua kata kunci yang ditentukan dalam kontennya.",
    example: "allintext:tutorial keamanan jaringan",
  },
  {
    operator: "AROUND(n)",
    explanation: "Mencari kata yang berjarak n kata dari kata lain.",
    example: 'cybersecurity AROUND(3) "data breach"',
  },
  {
    operator: "source:",
    explanation: "Mencari artikel dari sumber berita tertentu.",
    example: "source:CNN cybersecurity",
  },
  {
    operator: "location:",
    explanation: "Mencari hasil berdasarkan lokasi tertentu.",
    example: "location:jakarta restaurant",
  },
  {
    operator: "$",
    explanation: "Mencari harga atau angka dengan simbol mata uang.",
    example: "$50..$100 product",
  },
  {
    operator: "..",
    explanation: "Mencari dalam rentang angka tertentu.",
    example: "kamera 1000000..5000000",
  },
  {
    operator: "@",
    explanation: "Mencari di media sosial atau email.",
    example: "@twitter cybersecurity",
  },
];

export default Documentation;
