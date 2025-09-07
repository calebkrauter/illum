import { ReactNode } from "react";

interface Props {
  title?: string;
  children?: ReactNode;
}

export default function NavBar({ title, children }: Props) {
  return (
    <div className="mb-[50px]">
      <div className="fixed h-[30px] w-full bg-gray-300">
        <nav className="fixed h-[50px] w-full bg-white/20 backdrop-blur-lg">
          <div className="ml-[100px] flex translate-y-1/2">
            <div className="w-full text-xl font-semibold text-black">
              {title}
            </div>
            <div className="mr-[100px] flex w-full flex-row-reverse">
              {children}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
