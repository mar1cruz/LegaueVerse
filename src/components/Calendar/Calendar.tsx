import React, { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch } from "../../store/store";
import styles from "./Calendar.module.scss";
import { leagueThunks } from "../../store/leagueSlice";
import { useSearchParams } from "react-router-dom";

type Props = {
    leagueName: string | undefined
    dates: string[]
}

export const Calendar =({ leagueName, dates }: Props)=> {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const dateParam = searchParams.get("date");
        if (dateParam) {
            setSelectedDate(dayjs(dateParam));
        } else if (dates.length > 0) {
            const latestDate = dates[0];
            setSelectedDate(dayjs(latestDate));
        }
    }, [dates, dispatch]);

    const enabledDates = dates?.map(date => dayjs(date));
    const enableDays = (day: Dayjs): boolean => {
        return !enabledDates?.some(enabledDate => day.isSame(enabledDate, 'day'));
    };

    const onChange = (dateJs: Dayjs | null) => {
        if (dateJs && leagueName) {
            const dateFormatted = dateJs.format('YYYY-MM-DD');
            const query: { date?: string } = { date: dateFormatted };
            const { findDate, ...restParams } = Object.fromEntries(searchParams);
            setSearchParams({ ...restParams, ...query });

            dispatch(leagueThunks.getScore({ leagueName, date: dateFormatted }));
        }

        setIsOpen(false);
    };

    const calendarStyles = {
        position: 'absolute',
        zIndex: 10,
        top: '45px',
        backgroundColor: 'white',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        width: '300px',
        height: '300px'
    };

    return (
        <div className={styles.container}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="open-calendar" size="medium" onClick={() => setIsOpen(!isOpen)}>
                    <DateRangeTwoToneIcon />
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
