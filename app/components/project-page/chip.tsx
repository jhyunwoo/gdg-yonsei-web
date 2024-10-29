// components/Chip.tsx

import React from 'react';

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="rounded-md border border-red-400 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
      {text}
    </div>
  );
};

export default Chip;