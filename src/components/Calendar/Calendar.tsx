import * as React from 'react';
import {useState} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import dayjs, {Dayjs} from "dayjs";


export function Calendar() {
    const [isOpen, setIsOpen] = useState(false)

    const disabledDates = [
        '2024-05-10',
        '2024-05-11',
        '2024-05-12',
    ];

    const disabledDatesDayjs = disabledDates.map(date => dayjs(date));

    const disabledDays = (day: Dayjs): boolean => {
        return disabledDatesDayjs.some(disabledDate => day.isSame(disabledDate, 'day'));
    };

    const onChange = () => {
        setIsOpen(false)
    }

    return (
        <div style={{position: 'relative'}}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="delete" size="medium" onClick={() => setIsOpen(!isOpen)}>
                    <DateRangeTwoToneIcon/>
                </IconButton>
            </Stack>

            {isOpen && <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar views={['day']} sx={{position: 'absolute', left: 0, top: '20px'}}
                              shouldDisableDate={disabledDays}
                              onChange={onChange}
                />
            </LocalizationProvider>}
        </div>

    );
}