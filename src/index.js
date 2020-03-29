import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import database from './database';
import Routes from './routes';

export default function App() {
  return (
    <DatabaseProvider database={database}>
      <Routes database={database} />
    </DatabaseProvider>
  );
}
