import React from 'react';
import { LayoutDashboard, FileText, Settings, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: FileText, label: 'Profiles', path: '/profiles' },
        { icon: Activity, label: 'Logs', path: '/logs' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="w-[200px] h-full bg-macos-sidebar backdrop-blur-xl border-r border-macos-border flex flex-col pt-10 drag-region">
            <div className="px-4 mb-6 no-drag">
                <h1 className="text-sm font-semibold text-macos-text-secondary uppercase tracking-wider">sing-box</h1>
            </div>

            <nav className="flex-1 px-2 space-y-1 no-drag">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={clsx(
                                'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                                isActive
                                    ? 'bg-macos-active text-white shadow-sm'
                                    : 'text-macos-text hover:bg-white/10'
                            )}
                        >
                            <item.icon className="w-4 h-4 mr-3" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-macos-border no-drag">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-xs text-macos-text-secondary">Core: Running</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
