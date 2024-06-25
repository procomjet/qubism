"use client"
import React from 'react';
import { useAtom } from 'jotai';
// import AddStory from './AddStory';
import StoryBoardTag from '@/app/_components/homepage/StoryBoardTag';
import atoms from '../../../util/atoms';

export default function StoryBoard() {
  // const [darkMode] = useAtom(atoms.darkMode);
  const [storiesArray] = useAtom(atoms.storiesArray);


  return (
    <div>
        {storiesArray.map((username, index) => (
          <StoryBoardTag username={username} key={index} />
        ))}
      </div>
      
  );
}
