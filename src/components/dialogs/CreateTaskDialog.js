import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Alert from '@material-ui/lab/Alert';

// import { updateAlarm } from "./../../redux/actions";
import { taskTemplateData } from '../../data/TaskTemplateData';
import TaskSpecificParameters from './TaskSpecificParameters';

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
	middleBox: {
		padding: '20px 0',
	},
	width100: {
		width: '100%',
		display: 'flex'
	},
	width50: {
		width: '50%',
		padding: '5px',
	},
	taskTemplateSelect: {
		marginBottom: theme.spacing(1),
	},
	bottomBox: {
		paddingTop: '10px',
	},
	prioritySelect: {
		width: '40%',
		marginBottom: '10px',
	},
	retryAmountInput: {
		marginRight: '10px',
	}
}));

function getSteps() {
	return ['Task Parameters', 'Schedule Parameters'];
}
function getPriority() {
	const priorityData = [
		{
			id: 1,
			value: "Normal",
		},
		{
			id: 2,
			value: "Normal",
		},
	];
	return priorityData;
}

export default function CreateTaskDialog({ isOpen, handleClose, selectedRow }) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [activeStep, setActiveStep] = React.useState(0);
	const [specificData, setSpecificData] = React.useState({});
	const [deviceGroup, setDeviceGroup] = React.useState([]);
	const [device, setDevice] = React.useState([]);
	const [deviceValidate, setDeviceValidate] = React.useState(true);
	const [startTimeValidate, setStartTimeValidate] = React.useState(true);
	const [startTime, setStartTime] = React.useState('');
	const steps = getSteps();
	const priorityData = getPriority();

	useEffect(() => {
		console.log(specificData);
	}, [specificData])
	const handleNext = () => {
		if (deviceGroup.length !== 0 || device.length !== 0) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
			setDeviceValidate(true);
		}
		else setDeviceValidate(false);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleCreateDialog = () => {
		// if(startTime)
		const selectedTime = new Date(startTime);
		const currentTime = new Date();
		if (selectedTime > currentTime) {

		}
		else setStartTimeValidate(false);
		// handleClose();
	}

	const handleChangeStartTime = (e) => {
		setStartTime(e.target.value);
	}

	const handleDeviceDelete = (index) => {
		let array = [...device];
		array.splice(index, 1);
		setDevice(array);
	};
	const handleDeviceGroupDelete = (index) => {
		let array = [...deviceGroup];
		array.splice(index, 1);
		setDeviceGroup(array);
	};

	const handleKeyDownDeviceGroup = (e) => {
		if (e.key == 'Enter') {
			setDeviceValidate(true);
			setDeviceGroup(prevState => [...prevState, e.target.value]);
		}
	}
	const handleKeyDownDevice = (e) => {
		if (e.key == 'Enter') {
			setDeviceValidate(true);
			setDevice(prevState => [...prevState, e.target.value]);
		}
	}

	const [taskTemplate, setTaskTemplate] = React.useState('');
	const [taskName, setTaskName] = React.useState('');
	const [priority, setPriority] = React.useState('1');
	const [retryAmount, setRetryAmount] = React.useState(0);
	const [retryDelay, setRetryDelay] = React.useState(0);

	const handleChangeTaskTemplate = (event, child) => {
		console.log(event.target.value);
		setTaskTemplate(event.target.value);
		setTaskName(child.props.children);
	};
	const handleChangeTaskName = (event) => {
		setTaskName(event.target.value);
	};

	const handleChangePriority = (event) => {
		setPriority(event.target.value);
	};
	const handleChangeRetryAmount = (event) => {
		setRetryAmount(event.target.value);
	};
	const handleChangeRetryDelay = (event) => {
		setRetryDelay(event.target.value);
	};

	return (
		<div>
			<Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth={'sm'}>
				<DialogTitle id="form-dialog-title">Create Task</DialogTitle>
				<DialogContent>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};
							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
					{activeStep == 0 &&
						<div>
							<div>
								<FormControl fullWidth >
									<InputLabel id="standard-select-task-template-label">Select task template...</InputLabel>
									<Select
										labelId="standard-select-task-template-label"
										id="standard-select-task-template"
										value={taskTemplate}
										onChange={handleChangeTaskTemplate}
										className={classes.taskTemplateSelect}
										fullWidth
									>
										{taskTemplateData.Device.map((option) => (
											<MenuItem key={option.nameId} value={option.nameId}>
												{option.nameValue}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField
									id="task-name"
									label="Task name*"
									value={taskName}
									onChange={handleChangeTaskName}
									fullWidth
								/>
							</div>
							<TaskSpecificParameters taskTemplateNameId={taskTemplate} setSpecificData={setSpecificData} />
							<div className={classes.middleBox}>
								<h3>Device</h3>
								<div className={classes.width100}>
									<div className={classes.width50}>
										<TextField
											id="device-group-input"
											label="Add Device Group"
											onKeyDown={handleKeyDownDeviceGroup}
											fullWidth
										/>
									</div>
									<div className={classes.width50}>
										<TextField
											id="device-input"
											label="Add Device"
											onKeyDown={handleKeyDownDevice}
											fullWidth
										/>
									</div>
								</div>
								{deviceGroup.map((item, index) => {
									return (
										<Chip
											key={`chip_device_group${index}`}
											avatar={<Avatar>M</Avatar>}
											label={item}
											clickable
											color="primary"
											onDelete={() => handleDeviceGroupDelete(index)}
											variant="outlined"
										/>
									)
								})}
								{device.map((item, index) => {
									return (
										<Chip
											key={`chip_device${index}`}
											avatar={<Avatar>M</Avatar>}
											label={item}
											clickable
											color="primary"
											onDelete={() => handleDeviceDelete(index)}
											variant="outlined"
										/>
									)
								})}
								{deviceValidate == false &&
									<span>A task must contain at least one group or one device</span>
								}
							</div>

							<div className={classes.bottomBox}>
								<div style={{ width: '100%' }}>
									<TextField
										id="standard-select-priority"
										select
										label="Priority"
										value={priority}
										onChange={handleChangePriority}
										className={classes.prioritySelect}
									>
										{priorityData.map((option) => (
											<MenuItem key={`priority_${option.id}`} value={option.id}>
												{option.value}
											</MenuItem>
										))}
									</TextField>
								</div>
								<TextField
									id="retry-amount"
									type="number"
									label="Retry Amount*"
									InputLabelProps={{
										shrink: true,
									}}
									value={retryAmount}
									onChange={handleChangeRetryAmount}
									className={classes.retryAmountInput}
								/>
								<TextField
									id="retry-delay"
									label="Retry delay (mins)*"
									type="number"
									InputLabelProps={{
										shrink: true,
									}}
									value={retryDelay}
									onChange={handleChangeRetryDelay}
								/>
							</div>
						</div>
					}
					{activeStep == 1 &&
						<div>
							<div className={classes.width100}>
								<div className={classes.width50}>
									<TextField
										id="start-time"
										label="Start Time"
										type="datetime-local"
										value={startTime}
										onChange={handleChangeStartTime}
										// defaultValue="2017-05-24T10:30"
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</div>
								<div className={classes.width50}>
									{startTimeValidate == false &&
										<span>Start data time cannot be in the past</span>
									}
								</div>
							</div>
							<FormControlLabel
								control={
									<Switch
										checked={state.checkedB}
										onChange={handleChange}
										name="checkedB"
										color="primary"
									/>
								}
								label="Primary"
							/>
						</div>
					}
				</DialogContent>
				<DialogActions>
					<div>
						<Button className={classes.button}>
							CANCEL
						</Button>
						{activeStep === steps.length - 1 ? (
							<>
								<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
									Back
								</Button>
								<Button className={classes.button} onClick={handleCreateDialog}>
									CREATE
								</Button>
							</>
						) : (
							<>
								<Button onClick={handleNext} className={classes.button}>
									RUN ON A SCHEDULE
								</Button>
								<Button className={classes.button}>
									RUN NOW
								</Button>
							</>
						)}
					</div>
				</DialogActions>
			</Dialog>
		</div>
	);
}
