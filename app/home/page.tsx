import Navbar from './navbar'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to The Densitic Shipple & Return</h1>
        <p className="text-gray-700">
          Explore our collection of mattresses, accessories, and more to find the perfect sleep solution for you.
        </p>
      </div>
    </div>
  );
}

export default Landing