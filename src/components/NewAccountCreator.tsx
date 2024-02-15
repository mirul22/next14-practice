'use client';

import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createAccount } from '@/actions';

type Props = {};

const NewAccountCreator: React.FC<Props> = () => {
    const [editMode, setEditMode] = useState(false);

    if (!editMode) {
        return (
            <Button 
                className='text-left' 
                onClick={() => setEditMode(true)}
            >
                + New Account
            </Button>
        );
    }

    return (
        <form 
            action={createAccount} 
            onSubmit={() => setEditMode(false)} 
            className='flex flex-wrap gap-1'
        >
            <Input 
                id="name"
                name="name"
                type="text" 
                placeholder="Account Name" 
                className='text-slate-900 mb-2' 
            />
            <Button type="submit">Create</Button>
            <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </form>
    );
}

export default NewAccountCreator