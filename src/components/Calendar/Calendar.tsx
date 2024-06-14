import * as React from 'react';
import {useEffect, useState} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import dayjs, {Dayjs} from "dayjs";
import {useDispatch} from "react-redux";
import {setPlayingDaysAC} from "../../store/leagues-reducer";
import {useAppSelector} from "../../store/store";
import styles from "./Calendar.module.scss";


type Props = {
    disciplineName: string | undefined
}

export function Calendar(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs()); // Начальное значение в формате Dayjs

    const dispatch = useDispatch();
    const enabledDates = useAppSelector(state => state.disciplines.find(el => el.name === props.disciplineName?.toUpperCase())?.matchesDates);

    useEffect(() => {
        dispatch(setPlayingDaysAC(undefined, props.disciplineName!));
    }, []);


    const enabledDatesDayjs = enabledDates?.map(date => dayjs(date));

    const enableDays = (day: Dayjs): boolean => {
        return !enabledDatesDayjs?.some(enabledDate => day.isSame(enabledDate, 'day'));
    };

    const onChange = (date: Dayjs | null) => {
        if (date) {
            setSelectedDate(date);
        }
        if (date) {
            // console.log(date.format('YYYY-MM-DD'))
        }
        setIsOpen(false);
    };

    const calendarStyles = {
        position: 'absolute',
        top: '45px',
        backgroundColor: 'white',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        width: '300px',
        height: '300px'
    }

    return (
        <div className={styles.container}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="open-calendar" size="medium" onClick={() => setIsOpen(!isOpen)}>
                    <DateRangeTwoToneIcon/>
                </IconButton>


                {isOpen && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={selectedDate}
                            views={['day']}
                            sx={calendarStyles}
                            shouldDisableDate={enableDays}
                            onChange={onChange}
                        />
                    </LocalizationProvider>
                )}
            </Stack>
        </div>
    );
}
