import Image from "next/image";
import Link from "next/link";

const SidebarSection = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; link: string; image: string; price?: string }[];
}) => {
  return (
    <div className="bg-white p-4 rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-4 flex items-center gap-4">
            {/* Gambar */}
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
            </div>

            {/* Nama & Harga */}
            <div className="flex-1 min-w-0">
              <Link
                href={item.link}
                className="text-blue-600 font-semibold block"
              >
                {item.name}
              </Link>
              {item.price && <p className="text-gray-500 text-sm">From {item.price}</p>}
              <p className="text-xs">Read More &gt;</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
