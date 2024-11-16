"use client"
import { Modal } from "antd";

import { useAppStore } from "@/store/app-store";
const PlayListProvider = () => {
  const [playlistModalOpen, setPlaylistModalOpen, setMusicClicked] =
    useAppStore((state) => [
      state.playListModalOpen,
      state.setPlayListModal,
      state.setMusicClicked,
    ]);

  const hideModal = () => {
    setPlaylistModalOpen(false);
    setMusicClicked(null);
  };

  return (
    <Modal
      title="Add Music To PlayList"
      open={playlistModalOpen}
      footer={null}
      onCancel={hideModal}
    >
      
    </Modal>
  );
};

export default PlayListProvider;
