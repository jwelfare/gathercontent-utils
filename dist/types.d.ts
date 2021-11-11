export declare type GatherContentCredentials = {
    email: string;
    apiKey: string;
};
export declare type GatherContentFile = {
    id: string;
    project_id: number;
    filename: string;
    optimised_image_url: string;
    download_url: string;
    size: number;
    mime_type: string;
    alt_text: string;
    uploaded_by: number;
    created_at: string;
    updated_at: string | null;
};
export declare type GatherContentItem = {
    id: number;
    project_id: number;
    folder_uuid: string;
    template_id: string | null;
    structure_uuid: string;
    position: number;
    name: string;
    archived_by: number | null;
    archived_at: string | null;
    created_at: string;
    updated_at: string | null;
    next_due_at: string | null;
    completed_at: string | null;
    content: {
        [key: string]: any;
    };
    status_id: number;
    assigned_users: string[];
    assigned_user_ids: number[];
    assignee_count: number;
    structure?: GatherContentStructure;
};
export declare type GatherContentComponent = {
    uuid: string;
    name: string;
    project_id: number;
    field_count: number;
    updated_at: string | null;
    updated_by: number;
    updated_by_name: string;
    created_at: string;
    created_by: number;
    fields: GatherContentField[];
};
export declare type GatherContentFolder = {
    uuid: string;
    name: string;
    position: number;
    parent_uuid: string;
    project_id: number;
    type: string;
    archived_at: string;
};
export declare type GatherContentStructure = {
    uuid: string;
    groups: {
        uuid: string;
        name: string;
        fields: GatherContentField[];
    }[];
};
export declare type GatherContentTemplate = {
    name: string;
    id: number;
    number_of_items_using: number;
    structure_uuid: string;
    project_id: number;
    updated_at: string | null;
    updated_by: number;
    related: {
        structure: GatherContentStructure;
    };
};
export declare type GatherContentField = {
    uuid: string;
    field_type: 'text' | 'component';
    label: 'string';
    instructions: 'string';
    metadata: any;
};
export declare type PaginationProps = {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: any;
};
export declare type PaginatedList<T extends GatherContentComponent | GatherContentItem | GatherContentFolder | GatherContentTemplate | GatherContentFile> = {
    data: T[];
    pagination: PaginationProps;
};
