"use client";

import { Dispatch, SetStateAction } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import CloseBtnSVG from "@/app/_components/svgComps/CloseBtnSVG";
import InstagramSVG from "@/app/_components/svgComps/InstagramSVG";
import Stories from "./Stories";
import { useAtom } from "jotai";
import atoms from "../../../util/atoms";
import Image from "next/image";

export default function ViewAllStories({
  username,
  // setOpenStories,
}: {
  username: string;
  // setOpenStories: Dispatch<SetStateAction<boolean>>;
}) {
  const [openStories, setOpenStories] = useAtom(atoms.openStories);
  const width = useWindowSize();
  return (
    <div className="fixed top-0 left-0 z-[100] h-screen w-full overflow-hidden overflow-y-scroll bg-[#1a1a1a]">
      <button
        className="absolute top-4 left-4 z-[100]"
        type="button"
        onClick={() => {
          setOpenStories(false);
          document.body.style.overflow = "initial";
        }}
      >
        <div className="h-auto w-[103px]">
          {/* <InstagramSVG disableDarkMode white /> */}
          <Image
              src='/img/QUBISM.svg'
              alt='QUBISM'
              width={57}
              height={19.2}
              // layout="fill"
            />
        </div>
      </button>
      <button
        className="absolute top-6 right-6 z-[100]"
        type="button"
        onClick={() => {
          setOpenStories(false);
          document.body.style.overflow = "initial";
        }}
      >
        <CloseBtnSVG lightColor="white" darkColor="white" heightWidth="24" />
      </button>
      <Stories width={width} username={username} />
    </div>
  );
}