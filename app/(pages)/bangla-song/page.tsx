import BanglaSongList from "@/components/bangla/BanglaSongList";
import Musics from "@/components/msuics/Musics";

export const metadata = {
  title: "Musics",
};

const MusicsPage = async () => {
  return (
    <>
      <BanglaSongList />
    </>
  );
};

export default MusicsPage;
