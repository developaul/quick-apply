"use client";

import { FC } from "react";
import { ChevronBack } from "./icons";

type LayoutProps = {
  children: React.ReactNode;
  goBack?: () => void;
  title: string;
  bodyClassName?: any;
};

const Layout: FC<LayoutProps> = ({
  children,
  goBack,
  title,
  bodyClassName,
}) => {
  return (
    <>
      <header className="bg-white/30 shadow-sm px-4 py-2 sticky top-0 backdrop-blur z-10">
        <div className="w-full max-w-screen-xl m-auto">
          <div className="flex flex-row items-center">
            {goBack && (
              <div
                onClick={goBack}
                className="bg-white border mr-4 flex justify-center items-center w-8 h-8 rounded-full"
              >
                <ChevronBack />
              </div>
            )}
            <h4 className="h4">{title}</h4>
          </div>
        </div>
      </header>
      <main
        className={`py-16 px-4 bg-cover bg-center ${bodyClassName}`}
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <h2 className="h2 mb-4 text-center">
          Tu CV listo para conquistar los ATS
        </h2>

        {children}
      </main>
    </>
  );
};

export default Layout;
