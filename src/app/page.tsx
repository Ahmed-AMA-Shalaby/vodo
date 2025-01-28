import { redirect } from 'next/navigation';

const Home = (): void => {
  redirect('/shows');
};

export default Home;
