// "use client";

// import React, { useEffect, useState } from "react";

// const MusicPlayer = () => {
//     const [audioPlaying, setAudioPlaying] = useState(false);
//     const [audio] = useState(new Audio("/cintaterakhir.mp3"));

//     useEffect(() => {
//         if (audioPlaying) {
//             audio.play();
//         } else {
//             audio.pause();
//         }
//     }, [audioPlaying, audio]);

//     const toggleAudio = () => {
//         setAudioPlaying(!audioPlaying);
//     };

//     return (
//         <div>
//             <button onClick={toggleAudio}>
//                 {audioPlaying ? "Stop Music" : "Play Music"}
//             </button>
//         </div>
//     );
// };

// export default MusicPlayer;
"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './MusicPlayer.module.css'; // Buat file CSS terpisah untuk komponen ini

const MusicPlayer = () => {
    const [audioPlaying, setAudioPlaying] = useState(true);
    const [audio] = useState(new Audio("/cintaterakhir.mp3"));

    useEffect(() => {
        if (audioPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [audioPlaying, audio]);

    const toggleAudio = () => {
        setAudioPlaying(!audioPlaying);
    };

    return (
        <div className={styles.musicPlayer}>
            <button onClick={toggleAudio} className={styles.musicButton}>
                <Image
                    src={audioPlaying ? "/onn.png" : "/off.png"}
                    alt={audioPlaying ? "Stop Music" : "Play Music"}
                    width={50}
                    height={50}
                />
            </button>
        </div>
    );
};

export default MusicPlayer;
