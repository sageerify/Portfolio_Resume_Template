
import React from 'react';

interface Props {
  name: string;
  level: number; // 0 to 10
}

const SkillBar: React.FC<Props> = ({ name, level }) => {
  const segments = Array.from({ length: 10 });

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-400 font-medium">{name}</span>
      </div>
      <div className="flex gap-1">
        {segments.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-sm transition-colors duration-500 ${
              i < level ? 'bg-green-500' : 'bg-gray-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
