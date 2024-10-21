import React from "react";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-2xl px-2 sm:px-4 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
