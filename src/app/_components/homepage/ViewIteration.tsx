import { useState } from 'react'
import ViewAllStories from './ViewAllStories';
import { useAtom } from "jotai";
import atoms from "../../../util/atoms";

export default function ViewIteration({
    username
  }: {
    username: string
  }) {
    const [openStories, setOpenStories] = useAtom(atoms.openStories);
    
  return (
    <>
     {openStories ? (
        <ViewAllStories
          username={username}
        />
      ) : (
        ""
      )}
    </>
  )
}
