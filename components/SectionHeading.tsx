
import React from 'react';

interface Props {
  children: string;
}

const SectionHeading: React.FC<Props> = ({ children }) => {
  const prefix = children.substring(0, 3);
  const suffix = children.substring(3);

  return (
    <h2 className="text-3xl font-bold mb-8 text-white">
      <span className="text-green-500">{prefix}</span>
      {suffix}
    </h2>
  );
};

export default SectionHeading;
