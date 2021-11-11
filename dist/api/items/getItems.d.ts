export declare type GetItemsParams = {
    with_due_dates?: boolean;
    include?: ('template_name' | 'assignee_full_names' | 'folder_name' | 'status_name' | 'item_url' | 'structure')[];
    with_conversation_count?: string;
    is_overdue?: string;
    is_archived?: string;
    template_id?: number[];
    assigned_to?: number[];
    folder_uuid?: string[];
    status_id?: number[];
    item_id?: number[];
    name_contains?: string;
    sort_by?: 'name' | 'template' | 'updated_at' | 'assignees' | 'next_due_at' | 'conversations' | 'position' | 'archived_by' | 'archived_at' | 'folder';
    sort_dir?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
};
export declare const getItems: () => Promise<never[]>;
