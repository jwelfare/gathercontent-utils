import camelcaseKeys from 'camelcase-keys';
import { createSlug } from './generateSlug';

const reduceComponent = (dataContext: any, fields: any) => {
  // reduce fields to reference object
  // e.g. { <uuid>: <slug>, <uuid2>: <slug2> }
  const componentFieldUuidMap = fields.reduce((acc: any, field: any) => {
    return {
      ...acc,
      [field.uuid]: createSlug(field.label, acc, true),
    };
  }, {});

  // Loop through the given data context,
  // If it's not an array, consider it a POJO and loop through its keys
  // replacing them with their respective slugs from the above map
  if (!Array.isArray(dataContext)) {
    return Object.keys(dataContext).reduce((acc: any, fieldValueProp: any) => {
      return {
        ...acc,
        [componentFieldUuidMap[fieldValueProp]]: dataContext[fieldValueProp],
      };
    }, {});
  }

  // If it's an array, do the same for every item
  return dataContext.map((fieldValueItem) => {
    return Object.keys(fieldValueItem).reduce((acc: any, fieldValueProp: any) => {
      return {
        ...acc,
        [componentFieldUuidMap[fieldValueProp]]: fieldValueItem[fieldValueProp],
      };
    }, {});
  });
};

export const reduceFields = (dataContext: any, fields: any) =>
  fields.reduce((acc: any, field: any) => {
    const slug = createSlug(field.label, acc, true) as string;

    if (field.field_type === 'component') {
      const componentFields = reduceComponent(dataContext[field.uuid], field.component.fields);

      return {
        ...acc,
        [slug]: componentFields,
      };
    }

    return camelcaseKeys(
      {
        ...acc,
        [slug]: dataContext[field.uuid],
      },
      { deep: true },
    );
  }, {});
