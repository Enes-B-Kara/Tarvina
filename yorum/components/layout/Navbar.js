export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-base sm:text-lg">
          Yorum Platformu
        </a>
        {/* Burada ekstra menü butonları veya logo vs. eklenebilir */}
      </div>
    </nav>
  );
}
