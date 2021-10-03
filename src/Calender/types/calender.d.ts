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
    isToday: boolean;
}

export interface ICalenderContext { 
    viewDate: Date;
    pickedDate: string;
    viewType: viewTypes;
    isInputInValid: boolean;
    handleDateValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateValueKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSelectYear: (year: selectedYear) => void;
    handleSelectMonth: (month: selectedMonth) => void;
    handleSelectDate: (date: selectedDate) => void;
    handleChangeViewType: (target?: viewTypes) => void;
    handleMoveAction: (direction: moveTypes) => void;
}