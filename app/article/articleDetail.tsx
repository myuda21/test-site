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
      <p className="text-gray-700 mb-4">
      It’s hard to hit the hay when the cows are mooing. And with all your financial worries right now, you could be dealing with a downright noisy herd in your head. Not only are financial worries stressful to think about during the day, but they can also invade your nighttime routine and make getting enough quality sleep feel like a faraway dream. 
      </p>

      <h1 className="text-xl">A Financial Stress Wake-Up Call</h1>
      <br />
      <p>In an attempt to discover positive and negative factors that impact sleep, the State of America’s Sleep study asked individuals questions related to their day-to-day lives and sleeping environment. It found that more than half (60%) of self-rated poor sleepers live paycheck to paycheck and three out of four (75%) are concerned about their own financial future.</p>
      <p>Financial state plays a huge role in how we see and feel about ourselves, and 2020 has thrown a wrench into everyone’s financial stability. Am I making enough money? Am I saving enough money? How am I going to pay that bill? Do I have enough to support my family? These are the questions that may already have been keeping you up at night and are now amplified due to the COVID-19 pandemic.</p>
    </div>
  );
};

export default ArticleDetail;