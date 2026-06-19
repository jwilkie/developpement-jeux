import Image from 'next/image'
import styles from './Gallery.module.css'

export default function Gallery({pictures}) {
    return <div className={styles.gallery}>
        {pictures.map((picture, index) => <figure key={index}>
            <Image src={picture.image} alt={picture.caption} />
            <figcaption>{picture.caption}</figcaption>
        </figure>)}
    </div>
}