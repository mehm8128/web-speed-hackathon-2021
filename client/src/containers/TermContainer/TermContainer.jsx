import React from 'react';

import { TermPage } from '../../components/term/TermPage';

/** @type {React.VFC} */
export default function TermContainer() {
  React.useEffect(() => {
    document.title = '利用規約 - CAwitter';
  }, []);

  return <TermPage />;
}
