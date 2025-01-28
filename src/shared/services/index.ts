import { Show } from '@/models/show';

export const fetchShowsByQuery = async (query: string): Promise<Show[]> => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch shows: ${response.status} ${response.statusText}`);
  }

  const searchResults: { show: Show }[] = await response.json();

  return searchResults.map((result) => result.show);
};
