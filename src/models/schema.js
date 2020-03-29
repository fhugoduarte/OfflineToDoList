import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'todos',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'done', type: 'boolean'},
      ],
    }),
  ],
});
