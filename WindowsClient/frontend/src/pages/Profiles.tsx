import React from 'react';
import { Plus } from 'lucide-react';

const Profiles = () => {
    return (
        <div className="p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold">Profiles</h1>
                <button className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-white/10 rounded-xl">
                <div className="text-center text-macos-text-secondary">
                    <p className="mb-2">No profiles found</p>
                    <button className="text-macos-active hover:underline text-sm">Import Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
