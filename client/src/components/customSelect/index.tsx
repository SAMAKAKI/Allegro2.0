import React, { useState, useRef, useEffect } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[30%] h-12 border-y-[1px] flex justify-center items-center border-zinc-300 cursor-pointer" ref={dropdownRef}>
      <div className="flex justify-between items-center w-[80%]" onClick={toggleDropdown}>
        {value}
        <span className="">{isOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</span>
      </div>
      {isOpen && (
        <div className="absolute top-[60px] w-[300px] rounded-2xl bg-white shadow-xl flex flex-col gap-3 justify-center items-center p-4">
          {options.map((option) => (
            <div key={option} className={`w-full text-lg rounded-xl h-10 flex justify-center items-center transition-all ${option === value ? 'shadow-lg bg-orange-500 text-white' : 'hover:shadow-lg hover:bg-zinc-100'}`} onClick={() => handleOptionClick(option)}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
};
