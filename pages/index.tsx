import { HomeOrganism } from '@/components';
import { contentService } from '@/services';
import type { NextPage } from 'next';
import HomePageQuery from '@/queries/homepage.gql';
import { HomepageContent } from '@/generated/schema';

export const getStaticProps = async () => {
  const data = await contentService.query<HomepageContent, {}>({
    query: HomePageQuery,
  });

  return {
    props: {
      content: data,
    },
  };
};

const Home: NextPage = ({ content }: any) => {
  return <HomeOrganism content={content} />;
};

export default Home;
