import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCharacters } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const after = req.query?.after as string | null;
  // TODO sækja næstu síðu af gögnum hér
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const peopleResponse = await fetchCharacters(after ?? undefined);
  res.status(200).json(null);
};
