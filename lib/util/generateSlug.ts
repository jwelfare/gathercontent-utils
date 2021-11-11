import camelcaseKeys from 'camelcase-keys';
import slugify from 'slugify';

export const createSlug = (string: string, existingSlugs: any = {}, convertToCamelCase = false): string => {
  const stringToLower = string.toLowerCase();
  const slugged = slugify(stringToLower, { remove: /[*+~.,()/'"!:@]/g });
  const convertedSlug = convertToCamelCase ? Object.keys(camelcaseKeys({ [slugged]: string }))[0] : slugged;
  const duplicateKeys = Object.keys(existingSlugs).filter((slug) => slug === convertedSlug);

  return duplicateKeys.length ? `${convertedSlug}${duplicateKeys.length + 1}` : convertedSlug;
};
