import React from 'react';

import { AppHeader } from '../components/AppHeader/AppHeader';
// import { CheckContent } from '../components/CheckContent/CheckContent';
import CheckContent from '../components/CheckContent/CheckContent';
import Counter from '../components/Counter/Counter';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
    <Counter />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
