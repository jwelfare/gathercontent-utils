# @jwelfare/gathercontent-utils

Helpful util functions for working with the GatherContent API

## Usage

### `contentify(item)`

**Based off code within GatherContent's [offical client](https://github.com/gathercontent/gathercontent.js).**

Recursively converts a GatherContent item response to a friendly content object by 'slugifying' it's labels into properities.

| Name   | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| `item` | `GatherContentItem` | the item object to contentify |

#### Example

```typescript
import { contentify } from '@jwelfare/gathercontent-utils';

const response = await fetch(`https://api.gathercontent.com/items/${itemId}?include=structure`, {
  Accept: 'application/vnd.gathercontent.v2+json',
  Authorization: `Basic ${base64credentials}`,
});
// {
//   "data": {
//     ...
//     "content": {
//       "9f6a25b8-7617-495d-9c5c-7ef05ed68cf6": "<p>More features coming soon. This will include the ability to request COVID-19 vaccination certificates.</p>"
//     },
//     "structure": {
//       "uuid": "d6bf5b9b-a224-4283-84f7-4a02baa8b5aa",
//       "groups": [
//         {
//           "uuid": "19dfab8d-a533-4e52-b5c5-7acf3fadc4df",
//           "name": "Content",
//           "fields": [
//             {
//               "uuid": "9f6a25b8-7617-495d-9c5c-7ef05ed68cf6",
//               "label": "Hello World",
//               ...
//             }
//           ]
//         }
//       ]
//     }
//   }
// }

const content = contentify(response.data);
// {
//   'helloWorld': "<p>More features coming soon. This will include the ability to request COVID-19 vaccination certificates.</p>"
// }
```
