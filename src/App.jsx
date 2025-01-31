import React from 'react';
import Sidebar from './components/Sidebar';
import MarketInsights from './components/MarketInsights';
import CustomData from './components/CustomData';
import FinancialData from './components/FinancialData';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between">
          <MarketInsights />
          <CustomData />
        </div>
        <FinancialData/>
      </div>
    </div>
  );
}

export default App;
