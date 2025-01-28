'use client';

import Image from 'next/image';
import Link from 'next/link';

import placeholderImage from '@/assets/placeholder.png';
import { Show } from '@/models/show';

import styles from './styles.module.scss';

interface ShowsProps {
  shows: Show[];
}

const Shows = ({ shows }: ShowsProps): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Shows</h1>
      <ul className={styles.showList}>
        {shows.map((show) => (
          <li key={show.id} className={styles.showItem}>
            <Link href={`/shows/${show.id}`} className={styles.card}>
              <Image
                src={show.image?.original || placeholderImage.src}
                alt={show.name}
                width={200}
                height={250}
                className={styles.image}
                priority
              />
              <div className={styles.overlay}>
                <span className={styles.showName}>{show.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shows;
