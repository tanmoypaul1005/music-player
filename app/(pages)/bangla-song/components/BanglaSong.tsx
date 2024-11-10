"use client"
import React from 'react'
import musicList from "@/server/banglaSong.json";
import { useAppStore } from '@/store/app-store';
import MusicItem from '@/components/music/MusicItem';

const BanglaSong = () => {

    const PLAY_LIST_ID = "top-charts-musics-playlist";

    const [setMusic, setPlaylist, id] = useAppStore((state) => [
      state.setMusic,
      state.setPlaylist,
      state.playListId,
    ]);
  
    const musicClickHandler = (music: Music) => {
      setMusic(music);
      if (id !== PLAY_LIST_ID) {
        setPlaylist(PLAY_LIST_ID, musicList?.music);
      }
    };

    
    return (
        <>
           {musicList?.music?.map((music) => (
          <MusicItem
            key={music.id}
            musicData={music}
            onMusicClick={musicClickHandler}
          />
        ))} 
        </>
    )
}

export default BanglaSong