export type moveTypes = 'prev' | 'next';

export type viewTypes = 'year' | 'month' | 'date'; 

export interface selectedVale {
    value: number | string;
    isOverRange: boolean;
    isSelected: boolean;
}

export interface ICalenderContext { 
    currentDate: Date;
    viewType: viewTypes;
    viewYearArray: selectedVale[];
    handleMoveViewYear: (direction: moveTypes) => void
}