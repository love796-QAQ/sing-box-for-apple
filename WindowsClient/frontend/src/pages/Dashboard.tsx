import React, { useState } from 'react';
import { Play, Square, ArrowUp, ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';

const Dashboard = () => {
    const [isRunning, setIsRunning] = useState(false);

    const toggleService = () => {
        setIsRunning(!isRunning);
    };

    return (
        <div className="p-8 flex flex-col h-full">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

            {/* Status Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-medium mb-1">System Proxy</h2>
                        <p className={clsx("text-sm", isRunning ? "text-green-400" : "text-gray-400")}>
                            {isRunning ? "Active" : "Inactive"}
                        </p>
                    </div>

                    <button
                        onClick={toggleService}
                        className={clsx(
                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
                            isRunning
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-macos-active hover:bg-blue-600 text-white"
                        )}
                    >
                        {isRunning ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                    </button>
                </div>
            </div>

            {/* Traffic Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center text-macos-text-secondary mb-2">
                        <ArrowUp className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium uppercase">Uplink</span>
                    </div>
                    <div className="text-2xl font-mono">1.2 MB/s</div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center text-macos-text-secondary mb-2">
                        <ArrowDown className="w-4 h-4 mr-2" />
                        <span className="text-xs font-medium uppercase">Downlink</span>
                    </div>
                    <div className="text-2xl font-mono">4.5 MB/s</div>
                </div>
            </div>

            <div className="mt-auto text-center text-xs text-macos-text-secondary">
                sing-box core v1.8.0
            </div>
        </div>
    );
};

export default Dashboard;
