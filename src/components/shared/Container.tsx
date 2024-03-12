import { FC } from "react";
import { ContainerProps } from "@/interfaces/components/shared/ContainerProps";
import { cn } from "@/lib/utils";

const Container: FC<ContainerProps> = ({ classname, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
