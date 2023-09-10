'use client';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css'

export default function Watch() {
  const videoPrefix = 'https://storage.googleapis.com/mc-processed-videos/';
  const videoSrc = useSearchParams().get('v');
  return (
    <div className={styles.watchPage}>
      <h1>Watch Page</h1>
      <video controls src={videoPrefix + videoSrc}/>
    </div>
  );
}  