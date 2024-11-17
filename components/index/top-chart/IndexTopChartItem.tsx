"use client"
import Link from "next/link";
import Image from "next/image";
import { useAppStore } from "@/store/app-store";
import useAudioDuration from "@/hooks/use-audio-duration";
import Icon from "@/components/ui/Icon";
import styles from "./IndexTopChartItem.module.scss";
import React, { useEffect, useState, memo } from "react";

const IndexTopChartItem = ({
  musicData,
  index,
  isDragging,
  onMusicClick,
}: {
  musicData: Music;
  index: number;
  isDragging?: boolean;
  inPlaylist?: boolean;
  onMusicClick: (type: "play" | "remove", music: Music) => void;
}) => {
  const [music, isPlaying, setIsPlaying] = useAppStore((state) => [
    state.currentMusic,
    state.isPlaying,
    state.setPlayingState,
  ]);

  const { output } = useAudioDuration(musicData.src)
  const number = index < 10 ? `0${index}` : `${index}`;
  const currentMusic = music && music.id === musicData.id;

  const musicPlayClickHandler = async () => {
    if (currentMusic) {
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    } else {
      console.log("play music", musicData)
      await onMusicClick("play", musicData);
    }
  };


  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (musicData?.src) {
      const audio = new Audio(musicData.src);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      // Clean up the event listener
      return () => {
        audio.removeEventListener('loadedmetadata', () => {
          setDuration(audio.duration);
        });
      };
    }
  }, [musicData.src]);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };


  return (
    <li style={{ listStyle: "none" }}>
      {output}
      <div className={`${styles.link} ${isDragging ? styles.dragging : ""}`}>
        <span className={styles.number}>{number}</span>
        <Image
          className={styles.img}
          src={musicData.avatar}
          width={90}
          height={70}
          loading="lazy"
          alt={`${musicData.name} music cover image`}
        />

        <Link href="/">
          <h5 className={styles.title}>{musicData.name}</h5>
          <h6 className={styles.text}>{musicData.artist}</h6>
        </Link>
        {duration ? <>
          <span className={styles.time}>
            {duration ? formatDuration(duration) : "00:00"}
          </span>
          <button
            className={`btn ${styles.button} ${styles.play} ${currentMusic ? styles.active : ""
              }`}
            onClick={musicPlayClickHandler}
          >
            <Icon icon={currentMusic && isPlaying ? "pause-fill" : "play"} />
          </button>
        </>: <div>Loading ...</div>
        }
      </div>
    </li>
  );
};

export default memo(IndexTopChartItem);
