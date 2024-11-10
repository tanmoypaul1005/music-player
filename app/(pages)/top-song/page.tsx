import styles from "@/components/music/MusicList.module.scss";
import type { Metadata } from 'next'
import TopSong from "./components/TopSong";
 
export const metadata: Metadata = {
  title: 'Top Song',
  description: 'Top Song',
}

const MusicsPage = () => {

  return (
    <>
      <h3 className={styles.title}>Top song</h3>
      <ul className={styles.list}>
        <TopSong />
      </ul>
    </>
  );
};

export default MusicsPage;
