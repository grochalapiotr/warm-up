import React from 'react';

import { AppHeader } from '../components/AppHeader/AppHeader';
// import { CheckContent } from '../components/CheckContent/CheckContent';
import CheckContent from '../components/CheckContent/CheckContent';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
