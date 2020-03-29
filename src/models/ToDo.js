import {Model} from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

export default class ToDo extends Model {
  static table = 'todos';

  @field('title') title;
  @field('description') description;
  @field('done') done;

  @action async delete() {
    await super.markAsDeleted();
  }

  @action async toggleCheck() {
    await this.update((todo) => {
      todo.done = !todo.done;
    });
  }
}
