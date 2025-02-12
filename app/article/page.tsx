import Navbar from '../home/navbar'
import Footer from "../footer";
import ArticleDetail from "./articleDetail";
import SidebarSection from "./sidebarSection";
import ReviewList from "./reviewList";
import CommentForm from "./commentForm";

const Article = () => {
  const recentArticles = [
    { name: "Be a Better Mattress Shopper: Insights from Our COVID-19 Shopping Study", link: "#", image: "/product.png" },
    { name: "How to Stress Less and Sleep More Through 2020 and the New Year", link: "#", image: "/product.png" },
    { name: "Study Shows Good Savers Are Better Sleepers", link: "#", image: "/product.png" },
  ];

  const trendingProducts = [
    { name: "Katherine Latex Firm", link: "#", image: "/product.png", price: "$599.00" },
    { name: "Kiwi Luxe 2-Sided", link: "#", image: "/product.png", price: "$899.00" },
    { name: "Grace Firm", link: "#", image: "/product.png", price: "$949.00" },
  ];

  // Data untuk Reviews
  const reviews = [
    { name: "Laurie B.", comment: "So far, so good. It's very comfortable!", rating: 5, verified: true },
    { name: "John D.", comment: "Great product, really helps with sleep.", rating: 4, verified: false },
    { name: "John D.", comment: "Great product, really helps with sleep.", rating: 4, verified: true },
  ];
  return (
    <div className='bg-white'>
      {/* NAVBAR SECTION */}
      <Navbar />
      {/* CONTENT */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Artikel utama di kiri */}
      <div className="lg:col-span-2">
        <ArticleDetail />
        <CommentForm />
      </div>

      {/* Sidebar di kanan */}
      <div>
        <SidebarSection title="Recent Articles" items={recentArticles} />
        <SidebarSection title="Trending Products" items={trendingProducts} />
        <ReviewList reviews={reviews} />
      </div>
    </div>
      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default Article