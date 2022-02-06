import React from 'react';
import { Helmet } from 'react-helmet';

import { TermPage } from '../../components/term/TermPage';

/** @type {React.VFC} */
export default function TermContainer() {
  return (
    <>
      <Helmet>
        <title>利用規約 - CAwitter</title>
      </Helmet>
      <TermPage />
    </>
  );
}
