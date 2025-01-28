import { Metadata } from 'next';

import Shows from '@/pages/shows';
import { fetchShowsByQuery } from '@/services';

export const metadata: Metadata = {
  title: 'Shows - VODo',
  description: 'Browse all available TV shows on VODo.',
};

const ShowsController = async (): Promise<React.JSX.Element> => {
  const shows = await fetchShowsByQuery('powerpuff');

  return <Shows shows={shows} />;
};

export default ShowsController;
