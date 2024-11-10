import styles from "@/components/music/MusicList.module.scss";
import BanglaSong from "./components/BanglaSong";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bangla',
  description: 'Bangla song',
}


const MusicsPage = () => {

  return (
    <>
      <h3 className={styles.title}>Top bangla song</h3>
      <ul className={styles.list}>
        <BanglaSong />
      </ul>
    </>
  );
};

export default MusicsPage;
