import Navbar from './navbar'
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calculator,
  Eye,
  HomeIcon,
  Newspaper,
  NewspaperIcon,
  SearchIcon,
  UsersIcon,
  UtensilsCrossed,
  UtensilsIcon,
} from "lucide-react";

const router = useRouter();
    const { user } = useUser();
    const role = user?.publicMetadata?.role;

    const featureVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
        <motion.div
            className="flex flex-col items-center"
            variants={featureVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to The Densitic Shipple & Return</h1>
        <MotionWrapper>
                <div
                    id="home"
                    className="flex items-center rounded-lg px-20 py-10 mt-10"
                >
                    <div className="w-1/2 pr-10 flex flex-col items-end">
                        <h2 className="text-3xl font-bold text-green-primary mb-4 text-right">
                            Diet planning made easy.
                        </h2>
                        <p className="text-gray-700 mb-6 text-right">
                            Achieve your desired diet goal with our personalized
                            meal planner and explore trusted health articles to
                            learn more about your body and health.
                        </p>
                    </div>

                    <div className="w-1/2">
                        <Image
                            src="/health.jpg"
                            alt="Food"
                            layout="responsive"
                            width={500}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </MotionWrapper>
      </div>
    </div>
  );
}

export default Landing