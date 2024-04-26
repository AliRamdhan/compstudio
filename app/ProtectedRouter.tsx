// components/ProtectedRoute.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux"; // Fixed import

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn); // Adjust type as needed

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? <>{children}</> : null;
};

export default ProtectedRoute;