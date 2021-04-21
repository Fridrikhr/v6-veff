import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Characters } from '../../components/characters/Characters';

import { Layout } from '../../components/layout/Layout';
import { fetchCharacters } from '../../lib/swapi';
import { IPeopleResponse } from '../../types';

export type PageProps = {
  peopleResponse: IPeopleResponse;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { peopleResponse } = data;

  if (!peopleResponse) {
    return (<p>error</p>);
  }

  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1>Star Wars characters</h1>
      <Characters people={peopleResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps, ParsedUrlQuery> = async () => {
  const peopleResponse = await fetchCharacters();

  return {
    props: {
      peopleResponse,
    },
  };
};
