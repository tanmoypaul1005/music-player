import Image from 'next/image'
import styles from './MusicItem.module.scss'

const MusicItem = ({
    musicData,
    onMusicClick,
} : {
    musicData: Music
    onMusicClick: (music: Music) => void,
}) => {
    const musicClickHandler = () => {
        onMusicClick(musicData)
    }

    return <li className={styles.item}>
        <div className={styles.fixed}>
        </div>
        <div onClick={musicClickHandler}>
            <Image
                className={styles.img}
                src={musicData.avatar}
                width={160}
                height={160}
                loading='lazy'
                alt={`${musicData?.name} cover image`}
            />
            <h5 className={styles.title}>{musicData.name}</h5>
            <span className={styles.text}>{musicData.artist}</span>
        </div>
    </li>
}

export default MusicItem;