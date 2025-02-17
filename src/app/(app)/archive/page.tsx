import Navbar from '../navbar';
import Footer from "../footer";
import ListArticle from "./listArticle";
import Image from "next/image";

const Article = () => {
    return (
        <div className='bg-white'>
            {/* NAVBAR SECTION */}
            <Navbar />
            {/* CONTENT */}
            <div className="relative flex justify-center text-center text-white px-5">
                {/* Gambar Background */}
                <div className="relative w-full h-80 mx-auto overflow-hidden">
                    <Image
                        src="/showroom2.png"
                        alt="Megan Mattress"
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

                    {/* Konten di Tengah */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                        <h1 className="text-3xl font-mono md:text-4xl">Bedhead Blog</h1>
                        <p className="mt-3 text-lg md:text-xl font-mono">
                            News and updates from Quality Sleep Shop.
                        </p>
                    </div>
                </div>
            </div>

            <ListArticle />
            {/* FOOTER SECTION */}
            <Footer />
        </div>
    );
}

export default Article