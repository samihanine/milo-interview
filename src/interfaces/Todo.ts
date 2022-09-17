import { Tag } from './Tag';

export interface Todo {
  title: string;
  isCompleted: boolean;
  tag: Tag;
}
