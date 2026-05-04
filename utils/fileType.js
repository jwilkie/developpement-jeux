export const isArchive = (extension) => 
        ['.zip', '.7z', '.tar', '.gz', '.rar', '.bz2'].includes(extension);

export const isPDF = (extension) => 
    extension === '.pdf';

export const isImage = (extension) => 
    ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.bmp', '.ico', '.tiff', '.apng', '.avif', '.gif'].includes(extension);

export const isVideo = (extension) => 
    ['.webm', '.mkv', '.ogv', '.ogg', '.avi', '.mpg', '.mpeg', '.mp4', '.mov'].includes(extension);

export const isAudio = (extension) => 
    ['.mp3', '.wav', '.oga', '.flac'].includes(extension);