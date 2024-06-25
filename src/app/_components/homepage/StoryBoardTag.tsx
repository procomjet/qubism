"use client"

import { useState, useRef } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import atoms from "../../../util/atoms";
import useCheckNameLength from "../../../hooks/useCheckNameLength";
import ProfilePicSVG from "@/app/_components/svgComps/ProfilePicSVG";
import ViewAllStories from "@/app/_components/homepage/ViewAllStories";

import ImageIteration from "./ImageIteration";
import ViewIteration from "./ViewIteration";
export default function StoryBoardTag({ username }: { username: string }) {
  // const [openStories, setOpenStories] = useState(false);
  const [openStories, setOpenStories] = useAtom(atoms.openStories);

console.log(username)
// console.log(a[0].link)
  return (
    <>
      <ViewIteration username={username}/>
      <ImageIteration username={username}/>
    </>
  );
}
