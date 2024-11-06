import React from "react";
import { cn } from "../../utils/utils";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "error" | "normal" | "title";
};

const Text: React.FC<TextProps> = ({
  variant = "normal",
  className,
  children,
  ...props
}) => {
  const baseClasses = "text-lg font-normal";

  const variants = {
    error: "text-red-600 font-semibold",
    title: "text-2xl font-bold text-gray-900",
    normal: "text-gray-700",
  };

  return (
    <p {...props} className={cn(baseClasses, variants[variant], className)}>
      {children}
    </p>
  );
};

export default Text;
