"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduceFields_1 = require("../lib/util/reduceFields");
const fieldUuids = {
    '0': {
        'ffa6f996-a398-abbe-6ba4-720917aec367': 'Add my children under 12 - your name must be on their birth certificate',
        '3a204f08-2ff7-b513-cf2c-3572fa32c01c': '#',
    },
    '2': {
        'ffa6f996-a398-abbe-6ba4-720917aec367': 'View immunisation records for my children under 12',
        '3a204f08-2ff7-b513-cf2c-3572fa32c01c': '#',
    },
    '3': {
        'ffa6f996-a398-abbe-6ba4-720917aec367': "Change mine or my children's details",
        '3a204f08-2ff7-b513-cf2c-3572fa32c01c': 'https://moh-c19-support.atlassian.net/servicedesk/customer/portal/28/group/60/create/206',
    },
};
const fieldValues = [
    {
        uuid: 'ffa6f996-a398-abbe-6ba4-720917aec367',
        label: 'Text',
        instructions: '',
        field_type: 'text',
        metadata: { is_plain: true, validation: null },
    },
    {
        uuid: '3a204f08-2ff7-b513-cf2c-3572fa32c01c',
        label: 'URL',
        instructions: '',
        field_type: 'text',
        metadata: { is_plain: true, validation: null },
    },
];
describe('', () => {
    it('', () => {
        (0, reduceFields_1.reduceComponent)(fieldUuids, fieldValues);
    });
});
