import Image from "next/image";

const ArticleDetail = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      {/* Judul & Tanggal */}
      <h1 className="text-2xl font-bold mb-2">
        Financial Stress Robbing You of Sleep? Here’s How to Take It Back.
      </h1>
      <p className="text-gray-500 mb-4">May 26, 2021</p>

      {/* Gambar Artikel */}
      <div className="relative w-full h-64 mb-4">
        <Image
          src="/wakeup.png"
          alt="Article Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Konten */}
    </div>
  );
};

export default ArticleDetail;