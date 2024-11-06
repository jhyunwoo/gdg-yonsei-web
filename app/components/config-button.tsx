import { ReactNode } from "react";

export default function ConfigButton({
  children,
  onClick,
  className,
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  className: string;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type={"button"}
      onClick={onClick}
      className={`p-2 px-4 rounded-lg text-white text-sm ${className}`}
    >
      {children}
    </button>
  );
}
