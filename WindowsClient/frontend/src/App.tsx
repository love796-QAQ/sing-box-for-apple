import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profiles from './pages/Profiles';

function App() {
    return (
        <Router>
            <div className="flex h-screen w-screen bg-macos-bg text-macos-text overflow-hidden rounded-lg border border-macos-border/50">
                <Sidebar />
                <main className="flex-1 h-full overflow-auto bg-gradient-to-br from-macos-bg to-black/50">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profiles" element={<Profiles />} />
                        <Route path="/logs" element={<div className="p-8">Logs (Coming Soon)</div>} />
                        <Route path="/settings" element={<div className="p-8">Settings (Coming Soon)</div>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
