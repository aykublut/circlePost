import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center bg-black/70 items-center min-h-screen w-full">
      <Spinner scale={10} />
    </div>
  );
};

export default loading;
