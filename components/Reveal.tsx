import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  const classNames = className ? `reveal ${className}` : "reveal";
  return <div className={classNames}>{children}</div>;
}
