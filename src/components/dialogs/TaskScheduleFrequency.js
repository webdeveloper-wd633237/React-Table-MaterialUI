import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    width100: {
        width: '100%',
        display: 'flex'
    },
    width50: {
        width: '50%',
    },
    numberInput: {
        width: '50px',
        '& input': {
            padding: '5px',
        }
    },
    dataBox: {
        paddingTop: '15px',
        marginLeft: theme.spacing(1),
        '& span': {
            verticalAlign: 'middle',
            margin: theme.spacing(1),
        }
    }
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
function getStyles(name, arr, theme) {
    return {
        fontWeight:
            arr.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function TaskScheduleFrequency(props) {
    const classes = useStyles();
    const setData = (data) => {
        props.setFrequencyData(data);
    }
    useEffect(() => {
    }, [props])
    return (
        <div>
            {props.frequency === 'minutely' &&
                <Minutely setData={setData} />
            }
            {props.frequency === 'hourly' &&
                <Hourly setData={setData} />
            }
            {props.frequency === 'daily' &&
                <Daily setData={setData} />
            }
            {props.frequency === 'weekly' &&
                <Weekly setData={setData} />
            }
            {props.frequency === 'monthly' &&
                <Monthly setData={setData} />
            }
        </div>
    )
}

function Minutely(props) {
    const classes = useStyles();
    const [minutes, setMinutes] = useState(5);

    const handleChangeMinutes = (e) => {
        setMinutes(e.target.value)
    }


    useEffect(() => {

    }, [props])
    useEffect(() => {
        const data = {
            minutes
        }
        props.setData(data);
    }, [minutes])
    return (
        <div className={classes.width100}>
            <div className={classes.dataBox}>
                <span>Recur every </span>
                <TextField
                    id="standard-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeMinutes}
                    value={minutes}
                    className={classes.numberInput}
                />
                <span> minutes</span>
            </div>
        </div>
    )
}

function Hourly(props) {
    const classes = useStyles();
    const [hours, setHours] = useState(1);

    const handleChangeHours = (e) => {
        setHours(e.target.value)
    }


    useEffect(() => {

    }, [props])
    useEffect(() => {
        const data = {
            hours
        }
        props.setData(data);
    }, [hours])
    return (
        <div className={classes.width100}>
            <div className={classes.dataBox}>
                <span>Recur every </span>
                <TextField
                    id="standard-number-hour"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeHours}
                    value={hours}
                    className={classes.numberInput}
                />
                <span> hour(s)</span>
            </div>
        </div>
    )
}

function Daily(props) {
    const classes = useStyles();
    const [days, setDays] = useState(1);

    const handleChangeDays = (e) => {
        setDays(e.target.value)
    }


    useEffect(() => {

    }, [props])
    useEffect(() => {
        const data = {
            days
        }
        props.setData(data);
    }, [days])
    return (
        <div className={classes.width100}>
            <div className={classes.dataBox}>
                <span>Recur every </span>
                <TextField
                    id="standard-number-day"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeDays}
                    value={days}
                    className={classes.numberInput}
                />
                <span> day(s)</span>
            </div>
        </div>
    )
}

function Weekly(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [weekDays, setWeekDays] = useState([]);

    const handleChangeWeekDays = (e) => {
        setWeekDays(e.target.value)
    }


    useEffect(() => {

    }, [props])
    useEffect(() => {
        const data = {
            weekDays
        }
        props.setData(data);
    }, [weekDays])
    return (
        <div className={classes.width100}>
            <FormControl className={classes.formControl}>
                <InputLabel id="mutiple-weekly-label">On</InputLabel>
                <Select
                    labelId="mutiple-weekly-label"
                    id="mutiple-weekly"
                    multiple
                    value={weekDays}
                    onChange={handleChangeWeekDays}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {dayNames.map((day) => (
                        <MenuItem key={day} value={day} style={getStyles(day, weekDays, theme)}>
                            {day}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

function Monthly(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [radioValue, setRadioValue] = useState('once');
    const [weekDays, setWeekDays] = useState([]);
    const [months, setMonths] = useState([]);

    const handleChangeRadio = (event) => {
        setRadioValue(event.target.value);
    };

    const handleChangeWeekDays = (e) => {
        setWeekDays(e.target.value)
    }

    const handleChangeMonths = (e) => {
        setMonths(e.target.value)
    }

    useEffect(() => {

    }, [props])
    useEffect(() => {
        const data = {
            radioValue,
            weekDays,
            months
        }
        props.setData(data);
    }, [radioValue, weekDays, months])
    return (
        <div>
            <div className={classes.width100}>
                <RadioGroup value={radioValue} onChange={handleChangeRadio} >
                    <FormControlLabel value="once" control={<Radio color='primary' />} label={`On the `} />
                    <FormControlLabel value="weekdays" control={<Radio color='primary' />} label="Weekdays" />
                </RadioGroup>
            </div>
            {radioValue == 'weekdays' &&
                <div className={classes.width100}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="mutiple-weekly-label">On</InputLabel>
                        <Select
                            labelId="mutiple-weekly-label"
                            id="mutiple-weekly"
                            multiple
                            value={weekDays}
                            onChange={handleChangeWeekDays}
                            input={<Input />}
                            MenuProps={MenuProps}
                        >
                            {dayNames.map((day) => (
                                <MenuItem key={day} value={day} style={getStyles(day, weekDays, theme)}>
                                    {day}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            }
            <div className={classes.width100}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="mutiple-month-label">Of</InputLabel>
                    <Select
                        labelId="mutiple-month-label"
                        id="mutiple-month"
                        multiple
                        value={months}
                        onChange={handleChangeMonths}
                        input={<Input />}
                        MenuProps={MenuProps}
                    >
                        {monthNames.map((month) => (
                            <MenuItem key={month} value={month} style={getStyles(month, months, theme)}>
                                {month}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}