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

export interface selectedDate {
    id: string;
    value: number;
    isOverRange: boolean;
    isSelected: boolean;
}

export interface ICalenderContext { 
    currentDate: Date;
    viewType: viewTypes;
    handleSelectYear: (year: selectedYear) => void;
    handleSelectMonth: (month: selectedMonth) => void;
    handleSelectDate: (date: selectedDate) => void;
    handleChangeViewType: (target?: viewTypes) => void;
    handleMoveAction: (direction: moveTypes) => void;
}