export type moveTypes = 'prev' | 'next';

export type viewTypes = 'year' | 'month' | 'date'; 

export interface selectedVale {
    value: number;
    isOverRange: boolean;
    isSelected: boolean;
}

export interface ICalenderContext { 
    currentDate: Date;
    viewType: viewTypes;
    viewYearArray: selectedVale[];
    handleMoveViewYear: (direction: moveTypes) => void
}