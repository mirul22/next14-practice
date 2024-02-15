'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import { deleteAccount } from '@/actions';

type Props = {
    account: {
        id: string;
    };
};

const DeleteAccount: React.FC<Props> = ({
    account
}) => {
    const handleDelete = async () => {
        await deleteAccount(account.id);
    };

    return (
        <Button variant="ghost" size="sm" className="text-slate-500" onClick={handleDelete}>
            <TrashIcon size={16} />
        </Button>
    );
}

export default DeleteAccount