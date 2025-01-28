import './globals.css';

import Link from 'next/link';

import styles from './styles.module.scss';

export const metadata = {
  title: 'VODo - Your Streaming Hub',
  description: 'Explore and stream your favorite shows and episodes on VODo.',
};

type Props = {
  children: React.JSX.Element;
};

const RootLayout = ({ children }: Props): React.JSX.Element => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <Link href='/' className={styles.logo}>
              VODo
            </Link>
          </div>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} VODo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
