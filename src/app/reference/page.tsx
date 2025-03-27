"use client";
import React, { useState } from 'react';
import { Menu, X, BookOpen, RefreshCw, Puzzle, Code, Database, Layers } from 'lucide-react';
import Clang from '@/components/Clang';
import Containers from '@/components/Containers';
import Atomics from '@/components/Atomics';
import Miscellaneous from '@/components/Miscellaneous';
import IOlib from '@/components/IOlib';

// Sidebar Item Component
interface SidebarItemProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center w-full p-3 text-left transition duration-200 
      ${isActive
        ? 'bg-blue-500 text-white'
        : 'hover:bg-zinc-700 text-zinc-300 hover:text-white'}
    `}
  >
    <Icon className="mr-3" size={20} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<keyof typeof componentMap>('Clang');

  // Sidebar navigation items
  const sidebarItems: { label: string; icon: React.ComponentType<{ size: number; className?: string }>; component: keyof typeof componentMap }[] = [
    {
      label: 'C Library',
      icon: Code,
      component: 'Clang'
    },
    {
      label: 'C++ Containers',
      icon: Layers,
      component: 'Containers'
    },
    {
      label: 'Atomics and threading library',
      icon: Database,
      component: 'Atomics'
    },
    {
      label: 'Miscellaneous headers',
      icon: Puzzle,
      component: 'Miscellaneous'
    },
    {
      label: 'Input/Output Stream Library',
      icon: RefreshCw,
      component: 'IOlib'
    }
  ];

  // Component mapping
  const componentMap = {
    'Clang': <Clang />,
    'Containers': <Containers />,
    'Atomics': <Atomics/>,
    'Miscellaneous': <Miscellaneous />,
    'IOlib' : <IOlib/>
  };

  const handleComponentChange = (component: keyof typeof componentMap) => {
    setActiveComponent(component);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Menu Toggle */}
      <button 
        className="fixed top-14 right-4 z-50 lg:hidden bg-zinc-500 p-2 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 w-64 bg-zinc-800 z-40 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 bg-zinc-900">
          <div className="flex items-center">
            <BookOpen className="mr-2 text-blue-400" size={24} />
            <h2 className="text-xl font-bold text-white">Dev Libraries</h2>
          </div>
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.component}
              icon={item.icon}
              label={item.label}
              isActive={activeComponent === item.component}
              onClick={() => handleComponentChange(item.component)}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-zinc-900 lg:ml-0">
        {componentMap[activeComponent]}
      </main>
    </div>
  );
}