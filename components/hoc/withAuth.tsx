import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "@/types/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { ComponentType } from "react";

const withAuth = (Component: ComponentType) => {
  const AuthWrapper: React.FC = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
        if (!user) {
          router.push("/login");
        }
      });

      return () => {
        unsubscribe();
      };
    }, [router]);

    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
