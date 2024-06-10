import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  jumpTime: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, jumpTime}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [jumpTime, setJumpTime] = useState(0);


  useEffect(() => {
    if (audioRef.current) {
      console.log('Jumping to:', jumpTime);
      audioRef.current.currentTime = jumpTime;
      audioRef.current.play();
    }
  }, [jumpTime]);




  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="audio-player">
      <div className='text-2xl font-bold'>
        Audio Recording of Animal
      </div>
      <audio
        controls
        ref={audioRef}
        src={audioUrl}
      ></audio>

      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="time font-bold">{currentTime.toFixed(1)} seconds</div>
      </div>
    </div>
  );
};

export default AudioPlayer;