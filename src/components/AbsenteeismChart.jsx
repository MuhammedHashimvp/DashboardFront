import React from 'react';

const AbsenteeismChart = () => {
  const data = {
    department: 'Sales',
    absences: { annual: 10, personal: 5, other: 3 },
  };
  const colors = { annual: 'bg-blue-500', personal: 'bg-green-500', other: 'bg-yellow-500' };
  const iconsPerRow = 10;

  const renderIcons = () => {
    const { annual, personal, other } = data.absences;
    const icons = [
      ...Array(annual).fill('annual'),
      ...Array(personal).fill('personal'),
      ...Array(other).fill('other'),
    ];
    return (
      <div className="flex flex-wrap gap-1">
        {icons.map((type, index) => (
          <div key={index} className={`w-3 h-15 ${colors[type]} rounded-sm`} title={`${type.charAt(0).toUpperCase() + type.slice(1)} absence`} />
        ))}
        {Array.from({ length: Math.ceil(icons.length / iconsPerRow) * iconsPerRow - icons.length }).map((_, index) => (
          <div key={`empty-${index}`} className="w-3 h-6 opacity-0" />
        ))}
      </div>
    );
  };

  return (
    <>
    <div className="p-6 max-w-2xl mx-auto">
      
      <div className="flex items-start">
        <div className="flex-1">{renderIcons()}</div>
      </div>
      <div className="mt-4 flex space-x-4">
        <div className="flex items-center"><div className="w-3 h-3 bg-blue-500 mr-2"></div><span className="text-sm text-gray-700">Annual</span></div>
        <div className="flex items-center"><div className="w-3 h-3 bg-green-500 mr-2"></div><span className="text-sm text-gray-700">Personal</span></div>
        <div className="flex items-center"><div className="w-3 h-3 bg-yellow-500 mr-2"></div><span className="text-sm text-gray-700">Other</span></div>
      </div>
    </div>
    </>
  );
};

export default AbsenteeismChart;