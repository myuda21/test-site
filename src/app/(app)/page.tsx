"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/home");
    }, 2000); // 2 detik delay sebelum redirect

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div>
      {loading && <p>Loading...</p>}
    </div>
  );
}
