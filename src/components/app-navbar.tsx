import type { FC, ReactNode } from "react";

interface AppNavbarProps {
  title: string;
  children?: ReactNode;
}

export const AppNavbar: FC<AppNavbarProps> = (props) => {
  return (
    <header className="bg-sidebar sticky top-0 z-10 flex h-12 w-full justify-between p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="text-xl">{props.title}</div>
      </div>
      <div className="flex items-center gap-2">{props.children}</div>
    </header>
  );
};
