import React from 'react';
import Sidebar from '@/laduny/components/admin/Sidebar';

export default async function AdminLayout({
    children,
 }: {
    children: React.ReactNode;
 }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">{children}</div>
        </div>
    );
}
