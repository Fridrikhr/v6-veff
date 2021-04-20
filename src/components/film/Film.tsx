import Link from 'next/link';
import { ICharacter } from '../../types';

import s from './Film.module.scss';

type Props = {
  title: string;
  episodeID: string;
  openingCrawl: string;
  characters: Array<ICharacter>;
  name: string;
};

export function Film({
  title, episodeID, openingCrawl, characters, name,
}: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {title}
        {episodeID}
        {openingCrawl}
        {characters.map((character, i) => (
          <li key={i}>
            <Link href={`characters/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
        {name}
      </h2>
    </section>
  );
}

/*
export function Characters({ name }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 title="Characters">
        {name}
      </h2>
    </section>
  );
} */
