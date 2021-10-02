export type moveTypes = 'prev' | 'next';

export type viewTypes = 'year' | 'month' | 'date'; 

export interface selectedValue {
    value: number | string;
    isOverRange: boolean;
    isSelected: boolean;
}

export interface ICalenderContext { 
    currentDate: Date;
    viewType: viewTypes;
    viewYearArray: selectedValue[];
    handleMoveViewYear: (direction: moveTypes) => void
}