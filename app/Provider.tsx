"use client"; // Client component olduğunu belirt

import React, { ReactNode, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProviderProps {
  children: ReactNode;
}
const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return <>{children}</>;
};
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthGuard>{children}</AuthGuard>
    </SessionProvider>
  );
};

export default Provider;
