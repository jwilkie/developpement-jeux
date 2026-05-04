import styles from './YoutubeVideo.module.css'

export default function YoutubeVideo({title, code}) {
    return <div className={ styles.video }>
        <div>
            <iframe 
                title={ title }
                src={ `https://www.youtube-nocookie.com/embed/${code}` }
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    </div>
}
