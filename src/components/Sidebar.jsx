import React, { useState } from 'react';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Market Insights');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    // Updated classes for better spacing and rounded corners
    const itemClass = (item) => `
        mt-1 mb-1 mx-3 p-3 rounded-lg cursor-pointer flex items-center
        ${activeItem === item ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-300'}
    `;

    return (
        <div className="w-64 h-full bg-white shadow">
            <div className="mb-30 flex items-center justify-center p-5 border-b border-gray-200">
                <i className="fas fa-university fa-2x"></i>  {/* Finance icon */}
                <span className="ml-2 text-xl font-bold">Finance</span>
            </div>
            <ul className="mt-3">
                <li className={itemClass('Market Insights')} onClick={() => handleItemClick('Market Insights')}>
                    <i className="fas fa-chart-line mr-2"></i> Market Insights
                </li>
                <li className={itemClass('Custom Data')} onClick={() => handleItemClick('Custom Data')}>
                    <i className="fas fa-database mr-2"></i> Custom Data
                </li>
                <li className={itemClass('Financial Data')} onClick={() => handleItemClick('Financial Data')}>
                    <i className="fas fa-briefcase mr-2"></i> Financial Data
                </li>
                <li className={itemClass('Help Support')} onClick={() => handleItemClick('Help Support')}>
                    <i className="fas fa-headset mr-2"></i> Help Support
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
