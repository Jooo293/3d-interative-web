import { useEffect, useRef, useState } from 'react';
import { useAudio } from '../../context/AudioManager';

const PortfolioMediaPlayer = ({ media, title }) => {
    const playerRef = useRef(null);
    const { setMediaPlaying } = useAudio();
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const player = playerRef.current;
        return () => {
            player?.pause();
            setMediaPlaying(false);
        };
    }, [setMediaPlaying]);

    return <div className="portfolio-media-player">
        <video ref={playerRef} src={media.src} poster={media.poster} controls playsInline preload="none"
            aria-label={`${title}播放器`}
            onPlay={() => setMediaPlaying(true)}
            onPause={() => setMediaPlaying(false)}
            onEnded={() => setMediaPlaying(false)}
            onError={() => { setFailed(true); setMediaPlaying(false); }} />
        {failed && <p role="alert">暂时无法播放，请下载作品后收听。</p>}
        <a href={media.src} download>下载音乐作品</a>
    </div>;
};

export default PortfolioMediaPlayer;
