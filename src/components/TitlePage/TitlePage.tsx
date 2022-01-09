import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
}

const TitlePage = ({ title }: Props) => {
  return (
    <Helmet>
      <title>Space Tourism | {title}</title>
    </Helmet>
  );
};

export default TitlePage;
