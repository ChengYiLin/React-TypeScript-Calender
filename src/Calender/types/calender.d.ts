export type moveTypes = 'prev' | 'next';

export type viewTypes = 'year' | 'month' | 'date'; 


export interface selectedYear {
    value: number;
    isOverRange: boolean;
    isSelected: boolean;
}
export interface selectedMonth {
    value: string;
    isSelected: boolean;
}

export interface ICalenderContext { 
    currentDate: Date;
    viewType: viewTypes;
    handleSelectYear: (year: selectedYear) => void;
    handleSelectMonth: (year: selectedMonth) => void;
    handleChangeViewType: (target?: viewTypes) => void;
    handleMoveViewYear: (direction: moveTypes) => void;
}