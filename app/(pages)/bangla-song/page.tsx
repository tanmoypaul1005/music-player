"use client";
import MusicItem from "@/components/music/MusicItem";
import musicList from "@/server/banglaSong.json";
import { useAppStore } from "@/store/app-store";
import styles from "@/components/music/MusicList.module.scss";

const MusicsPage = () => {

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
      <h3 className={styles.title}>Top bangla song</h3>
      <ul className={styles.list}>
        {musicList?.music?.map((music) => (
          <MusicItem
            key={music.id}
            musicData={music}
            onMusicClick={musicClickHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default MusicsPage;
