import React, { useState, useEffect, useRef } from "react";
import Controls from "./PlayerControls";
import playlistStyles from "./Playlist.module.css";
import { tracks } from "../PianoCompositions/tracks";
import SonglistHeader from "./SonglistHeader";
import Songlist from "./Songlist";

export default function TrackPlayer() {
  //states
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  //track info
  const title = tracks[trackIndex][0];
  const audioSrc = tracks[trackIndex][1];

  //refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const onVolumeChange = (value) => {
    setVolume(value);
    audioRef.current.volume = volume;
  };

  const { duration } = audioRef.current;

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const onTrackClick = (i) => {
    setTrackIndex(i);
    setIsPlaying(true);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  // Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className={playlistStyles.playlist}>
      <div className={playlistStyles.playerBlock}>
        <div className={playlistStyles.playingInfo}>
          <div
            style={{ fontSize: "1rem", fontWeight: "800", color: "#5DADE2" }}
          >
            Now Playing{" "}
          </div>
          <div>{title}</div>
        </div>
        <Controls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => onVolumeChange(e.target.value)}
          onClick={(e) => onVolumeChange(e.target.value)}
        />
      </div>
      <input
        type="range"
        className={playlistStyles.progressBar}
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
      <div className={playlistStyles.songlistBlock}>
        <SonglistHeader />
        {tracks.map((track, i) => (
          <div key={i} onClick={() => onTrackClick(i)}>
            <Songlist index={i} title={track[0]} duration={track[2]} />
          </div>
        ))}
      </div>
    </div>
  );
}
