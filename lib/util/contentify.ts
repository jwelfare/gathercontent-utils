import { GatherContentItem } from '../types';
import { createSlug } from './generateSlug';
import { reduceFields } from './reduceFields';

export const contentify = (item: GatherContentItem) => {
  const itemContent = item.structure?.groups.reduce(
    (acc: any, group: any) => ({
      ...acc,
      [createSlug(group.name, acc, true)]: reduceFields(item.content, group.fields),
    }),

    {},
  );

  return {
    ...item,
    name: createSlug(item.name),
    content: itemContent,
  };
};
