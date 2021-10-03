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
    viewType: viewTypes;
    setViewDate: React.Dispatch<React.SetStateAction<Date>>;
    handleSelectYear: (year: selectedYear, onChange: (newDate: string) => void) => void;
    handleSelectMonth: (month: selectedMonth, onChange: (newDate: string) => void) => void;
    handleSelectDate: (date: selectedDate, onChange: (newDate: string) => void) => void;
    handleChangeViewType: (target?: viewTypes) => void;
    handleMoveAction: (direction: moveTypes) => void;
}