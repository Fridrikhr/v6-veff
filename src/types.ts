// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: string;
  mass?: string;
}

export interface IFilm {
  title?: string;
  episodeID?: string;
  openingCrawl?: string;
  characterConnection: {
    characters: Array<ICharacter>
  };
}

export interface IFilmResponse {
  allFilms?: {
    films: Array<IFilm>;
  }
}

export interface IPeopleResponse {
  allPeople?: {
    totalCount?: number;
    pageInfo?: IPaging;
    edges?: Array<{
      cursor: string;
      node?: ICharacter;
    }>;
  }
}

export interface IPaging {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  startCursor?: string;
  endCursor?: string;
}

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
