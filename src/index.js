import React from 'react';
import {StatusBar} from 'react-native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import database from './database';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle="light-content" />

      <DatabaseProvider database={database}>
        <Routes database={database} />
      </DatabaseProvider>
    </>
  );
}
