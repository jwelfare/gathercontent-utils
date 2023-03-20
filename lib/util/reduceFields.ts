import camelcaseKeys from 'camelcase-keys';
import { createSlug } from './generateSlug';

export const reduceComponent = (dataContext: any, fields: any) => {
  // reduce fields to reference object
  // e.g. { <uuid>: <slug>, <uuid2>: <slug2> }
  const componentFieldUuidMap = fields.reduce((acc: any, field: any) => {
    return {
      ...acc,
      [field.uuid]: createSlug(field.label, acc, true),
    };
  }, {});

  // Check if the value is an array, if so do the same for every item
  if (Array.isArray(dataContext)) {
    return dataContext.map((fieldValueItem) =>
      Object.keys(fieldValueItem).reduce((acc: any, fieldValueProp: any) => {
        return {
          ...acc,
          [componentFieldUuidMap[fieldValueProp]]: fieldValueItem[fieldValueProp],
        };
      }, {}),
    );
  }

  // Check if the value is a repeated component

  // Otherwise, consider it a POJO and loop through its keys
  // replacing them with their respective slugs from the above map
  return Object.keys(dataContext).reduce((acc: any, fieldValueProp: any) => {
    return {
      ...acc,
      [componentFieldUuidMap[fieldValueProp]]: dataContext[fieldValueProp],
    };
  }, {});
};

export const reduceFields = (dataContext: any, fields: any) =>
  fields.reduce((acc: any, field: any) => {
    const slug = createSlug(field.label, acc, true) as string;

    // if the value is a repeated component, we need to first flatten it to an array
    if (field.field_type === 'component' && 'repeatable' in field.metadata) {
      dataContext[field.uuid] = Object.values(dataContext[field.uuid]);
    }

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
