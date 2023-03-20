"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
const testObject = {
    id: 15764833,
    project_id: 366782,
    folder_uuid: 'f16d54a8-4a60-45c4-8f58-74dbd99f6a36',
    structure_uuid: 'c9730938-7f56-4af7-9b53-51d52d690aa8',
    template_id: 3012698,
    position: 8,
    name: 'Dashboard I Want To... Links',
    status_id: 2387028,
    archived_by: null,
    archived_at: null,
    next_due_at: null,
    completed_at: null,
    assigned_users: [],
    assigned_user_ids: [],
    current_workflow_assigned_user_ids: [],
    assignee_count: 0,
    updated_at: '2023-03-20 02:35:53',
    created_at: '2023-03-01 22:53:34',
    display_archived_at: null,
    display_next_due_at: null,
    display_completed_at: null,
    display_updated_at: {
        utc: '2023-03-20T02:35:53+00:00',
        iso: '2023-03-20T02:35:53+00:00',
        relative: '2 hours ago',
        datetime: 'Mar 20, 2023 at 2:35 AM',
        date: 'Mar 20, 2023',
        time: '2:35 AM',
    },
    display_created_at: {
        utc: '2023-03-01T22:53:34+00:00',
        iso: '2023-03-01T22:53:34+00:00',
        relative: '2 weeks ago',
        datetime: 'Mar 01, 2023 at 10:53 PM',
        date: 'Mar 01, 2023',
        time: '10:53 PM',
    },
    structure: {
        uuid: 'c9730938-7f56-4af7-9b53-51d52d690aa8',
        groups: [
            {
                uuid: '4e0a1406-2491-4fa1-9923-c05cbe3e8798',
                name: 'Content',
                fields: [
                    {
                        uuid: '3c1d6943-8848-6953-7fb2-0f5a277b1837',
                        label: 'Heading',
                        instructions: '',
                        field_type: 'text',
                        metadata: {
                            is_plain: true,
                            validation: null,
                        },
                    },
                    {
                        uuid: '9bd5350b-9921-8949-8666-e3a54215b993',
                        label: 'Link',
                        instructions: '',
                        field_type: 'component',
                        component: {
                            uuid: 'd3ab0d91-200c-4d8c-881d-a3de488bd85b',
                            fields: [
                                {
                                    uuid: 'ffa6f996-a398-abbe-6ba4-720917aec367',
                                    label: 'Text',
                                    instructions: '',
                                    field_type: 'text',
                                    metadata: {
                                        is_plain: true,
                                        validation: null,
                                    },
                                },
                                {
                                    uuid: '3a204f08-2ff7-b513-cf2c-3572fa32c01c',
                                    label: 'URL',
                                    instructions: '',
                                    field_type: 'text',
                                    metadata: {
                                        is_plain: true,
                                        validation: null,
                                    },
                                },
                            ],
                        },
                        metadata: {
                            repeatable: {
                                limit: 2,
                                isRepeatable: true,
                                limitEnabled: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    content: {
        '3c1d6943-8848-6953-7fb2-0f5a277b1837': 'I want to...',
        '9bd5350b-9921-8949-8666-e3a54215b993': {
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
        },
    },
};
describe("Contentify util", () => {
    it("Should flatten object", () => {
        console.log(JSON.stringify((0, lib_1.contentify)(testObject), null, 2));
    });
});
