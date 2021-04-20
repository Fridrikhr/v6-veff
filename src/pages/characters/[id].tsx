import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { ErrorPage } from '../../containers/Error';
import { fetchSwapi } from '../../lib/swapi';
import { ICharacter } from '../../types';

import { Layout } from '../../components/layout/Layout';
import { Person } from '../../components/person/Person';

export type PageProps = {
  person: ICharacter | null;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { person } = data;

  if (!person) {
    return <ErrorPage message="Person not found" status={404} />;
  }

  const {
    name, birthYear, eyeColor, hairColor, height, mass,
  } = person;

  return (
    <Layout>
      <Head>
        <title>Star Wars character—{name}</title>

      </Head>

      <Person person={person} />

      <li>
        Name: {name}
      </li>
      <li>
        Birth Year: {birthYear}
      </li>
      <li>
        Eye Color: {eyeColor}
      </li>
      <li>
        Hair Color: {hairColor}
      </li>
      <li>
        Height: {height} cm
      </li>
      <li>
        Mass: {mass} kg
      </li>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ params }) => {
  const id = params?.id as string | undefined;
  const query = `
    query {
      person(id: "${id}") {
        name
        birthYear
        eyeColor
        hairColor
        height
        mass
      }
    }
  `;

  let person = null;

  if (id) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await fetchSwapi<any>(query, { id });

    person = result.person;
  }

  return {
    props: {
      person: person ?? null,
    },
  };
};
