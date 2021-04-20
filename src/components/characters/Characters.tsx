import React, { useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter, IPeopleResponse } from '../../types';

type Props = {
  people: IPeopleResponse;
};

/**
 * Hjálpar týpa ef við erum að filtera burt hugsanleg null gildi:
 *
 * const items: T = itemsWithPossiblyNull
 *  .map((item) => {
 *    if (!item) {
 *      return null;
 *    }
 *    return item;
 *  })
 *  .filter((Boolean as unknown) as ExcludesFalse);
 * items verður Array<T> en ekki Array<T | null>
 */
/* type ExcludesFalse = <T>(x: T | null | undefined | false) => x is T;

function responseToArray() {
  // Breyta peopleResponse yfir í ICharacter array

} */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Characters({ people }: Props): JSX.Element {
  // TODO meðhöndla loading state, ekki þarf sérstaklega að villu state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);

  // TODO setja grunngögn sem koma frá server
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nextPage, setNextPage] = useState<string | null>(null);
  // end cursor /api/characters?after=${nextPage}

  const fetchMore = async (): Promise<void> => {
    // TODO sækja gögn frá /pages/api/characters.ts (gegnum /api/characters), ef það eru fleiri
    // (sjá pageInfo.hasNextPage) með cursor úr pageInfo.endCursor
  };

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>
    </section>
  );
}
