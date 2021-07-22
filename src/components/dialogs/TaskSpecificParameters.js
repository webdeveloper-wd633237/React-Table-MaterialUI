import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
	specificBox: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
		border: '1px solid #333'
	},
}));

export default function TaskSpecificParameters(props) {
	const classes = useStyles();
	const setData = (data) => {
		props.setSpecificData(data);
	}
	useEffect(() => {
	}, [props])
	return (
		<div>
			{props.taskTemplateNameId === 'getClock' &&
				<GetClock />
			}
			{props.taskTemplateNameId === 'firmwareUpgradeAMM' &&
				<FirmwareUpgradeAMM setData={setData} />
			}
			{props.taskTemplateNameId === 'rpmaCreateConfigFile' &&
				<RpmaCreateConfigFile setData={setData} />
			}
			{props.taskTemplateNameId === 'dataCollection' &&
				<DataCollection setData={setData} />
			}
			{props.taskTemplateNameId === 'dataCollection' &&
				<DataCollection setData={setData} />
			}
			{props.taskTemplateNameId === 'rpmaChangeDataPushSchedule' &&
				<RpmaChangeDataPushSchedule setData={setData} />
			}
			{props.taskTemplateNameId === 'dt025XMeteringOperations' &&
				<Dt025XMeteringOperations setData={setData} />
			}
			{props.taskTemplateNameId === 'rpmaExecuteConfigChange' &&
				<RpmaExecuteConfigChange setData={setData} />
			}
			{props.taskTemplateNameId === 'meterReading' &&
				<MeterReading setData={setData} />
			}
			{props.taskTemplateNameId === 'meterReadingsSEM' &&
				<MeterReadingsSEM setData={setData} />
			}
			{props.taskTemplateNameId === 'getPushSetupConfigurationSEM' &&
				<GetPushSetupConfigurationSEM setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ActivateAlarmFilter' &&
				<Is15959ActivateAlarmFilter setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeActivityCalender' &&
				<Is15959ChangeActivityCalender setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeActivityCalender3Phase' &&
				<Is15959ChangeActivityCalender3Phase setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeBillingDateType' &&
				<Is15959ChangeBillingDateType setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeDemandIntegrationPeriod' &&
				<Is15959ChangeDemandIntegrationPeriod setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeImageActivationSchedule' &&
				<Is15959ChangeImageActivationSchedule setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeInstantaneousPushFrequency' &&
				<Is15959ChangeInstantaneousPushFrequency setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeLoadLimit' &&
				<Is15959ChangeLoadLimit setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangeMeterMode' &&
				<Is15959ChangeMeterMode setData={setData} />
			}
			{props.taskTemplateNameId === 'is15959ChangePassiveRelayTime' &&
				<Is15959ChangePassiveRelayTime setData={setData} />
			}
		</div>
	)
}

function GetClock() {
	return (
		<div></div>
	)
}

function FirmwareUpgradeAMM(props) {
	const classes = useStyles();
	const [manufacturerType, setManufacturerType] = useState('');
	const [modelType, setModelType] = useState('');
	const [version, setVersion] = useState('');
	const [imgFileName, setImgFileName] = useState('');
	const [imgDescription, setImgDescription] = useState('');

	const handleChangeManufacturerType = (e) => {
		setManufacturerType(e.target.value)
	}
	const handleChangeModelType = (e) => {
		setModelType(e.target.value)
	}
	const handleChangeVersion = (e) => {
		setVersion(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			manufacturerType,
			modelType,
		}
		props.setData(data);
	}, [manufacturerType, modelType])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="standard-select-manufacturer-type-label">Select the manufacturer type*</InputLabel>
						<Select
							labelId="standard-select-manufacturer-type-label"
							id="standard-select-manufacturer-type"
							value={manufacturerType}
							onChange={handleChangeManufacturerType}
							fullWidth
						>
							<MenuItem value={'type1'}>Manufacturer Type 1</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="standard-select-model-type-label">Select the model type*</InputLabel>
						<Select
							labelId="standard-select-model-type-label"
							id="standard-select-model-type"
							value={modelType}
							onChange={handleChangeModelType}
							fullWidth
						>
							<MenuItem value={'model1'}>Model Type 1</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="select-version"
						label="Select the version*"
						value={version}
						onChange={handleChangeVersion}
						fullWidth
						disabled
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="image-filename"
						label="Image Filename"
						value={imgFileName}
						disabled
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<TextField
					id="image-description"
					label="Image Description"
					value={imgDescription}
					disabled
					fullWidth
				/>
			</div>
		</div>
	)
}

function RpmaCreateConfigFile(props) {
	const classes = useStyles();
	const [file, setFile] = useState('');
	const [identifier, setIdentifier] = useState('');
	const [signature, setSignature] = useState('');
	const [size, setSize] = useState('');

	const handleChangeFile = (e) => {
		setFile(e.target.value)
	}
	const handleChangeIdentifier = (e) => {
		setIdentifier(e.target.value)
	}
	const handleChangeSignature = (e) => {
		setSignature(e.target.value)
	}
	const handleChangeSize = (e) => {
		setSize(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			file,
			identifier,
			signature,
			size
		}
		props.setData(data);
	}, [identifier, signature, size, file])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<Button color="primary" component="label">
						SELECT A FILE
						<input
							type="file"
							onChange={handleChangeFile}
							hidden
						/>
					</Button>
				</div>
				<div className={classes.width50}>
					<TextField
						id="file-identifier"
						label="Configuration file identifier*"
						value={identifier}
						onChange={handleChangeIdentifier}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="file-signature"
						label="Configuration file signature*"
						value={signature}
						onChange={handleChangeSignature}
						fullWidth
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="file-size"
						label="Configuration file size"
						value={size}
						onChange={handleChangeSize}
						fullWidth
					/>
				</div>
			</div>
		</div>
	)
}

function DataCollection(props) {
	const classes = useStyles();
	const [state, setState] = useState({
		events: true,
		getProfile: true,
		getReading: true,
		getBillingProfile: true,
	});
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	useEffect(() => {

	}, [props])
	useEffect(() => {
		props.setData(state);
	}, [state])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.events} onChange={handleChange} name="events" color="primary" />}
						label="events"
					/>
				</div>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getProfile} onChange={handleChange} name="getProfile" color="primary" />}
						label="Get Profile"
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getReading} onChange={handleChange} name="getReading" color="primary" />}
						label="Get Readings"
					/>
				</div>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getBillingProfile} onChange={handleChange} name="getBillingProfile" color="primary" />}
						label="Get Billing Profile"
					/>
				</div>
			</div>
		</div>
	)
}

function RpmaChangeDataPushSchedule(props) {
	const classes = useStyles();
	const [offset, setOffset] = useState('');
	const [localTime, setLocalTime] = useState('');
	const [transmissionStart, setTransmissionStart] = useState('');
	const [transmissionStop, setTransmissionStop] = useState('');
	const [transmissionStartOffset, setTransmissionStartOffset] = useState('');
	const [transmissionEndOffset, setTransmissionEndOffset] = useState('');
	const [reportingPeriod, setReportingPeriod] = useState('');

	const handleChangeOffset = (e) => {
		setOffset(e.target.value)
	}
	const handleChangeLocalTime = (e) => {
		setLocalTime(e.target.value)
	}
	const handleChangeTransmissionStart = (e) => {
		setTransmissionStart(e.target.value)
	}
	const handleChangeTransmissionStop = (e) => {
		setTransmissionStop(e.target.value)
	}
	const handleChangeTransmissionStartOffset = (e) => {
		setTransmissionStartOffset(e.target.value)
	}
	const handleChangeTransmissionEndOffset = (e) => {
		setTransmissionEndOffset(e.target.value)
	}
	const handleChangeReportingPeriod = (e) => {
		setReportingPeriod(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			offset,
			localTime,
			transmissionStart,
			transmissionStop,
			transmissionStartOffset,
			transmissionEndOffset,
			reportingPeriod,
		}
		props.setData(data);
	}, [offset, localTime, transmissionStart, transmissionStop, transmissionStartOffset, transmissionEndOffset, reportingPeriod])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="offset"
						label="Enter the offset in minutes"
						value={offset}
						onChange={handleChangeOffset}
						fullWidth
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="local-time"
						label="Use Local Time"
						value={localTime}
						onChange={handleChangeLocalTime}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="transmission-start"
						label="Random transmission start"
						value={transmissionStart}
						onChange={handleChangeTransmissionStart}
						fullWidth
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="transmission-stop"
						label="Random transmission stop"
						value={transmissionStop}
						onChange={handleChangeTransmissionStop}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="transmission-start-offset"
						label="Random transmission start offset"
						value={transmissionStartOffset}
						onChange={handleChangeTransmissionStartOffset}
						fullWidth
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="transmission-end-offset"
						label="Random transmission end offset"
						value={transmissionEndOffset}
						onChange={handleChangeTransmissionEndOffset}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="reporting-period"
						label="Reporting period in minutes"
						value={reportingPeriod}
						onChange={handleChangeReportingPeriod}
						fullWidth
					/>
				</div>
			</div>
		</div>
	)
}

function Dt025XMeteringOperations(props) {
	const classes = useStyles();
	const [activate, setActivate] = useState(true);

	const handleChangeActivate = (e) => {
		setActivate(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			activate,
		}
		props.setData(data);
	}, [activate])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="standard-select-activate-label">Activate*</InputLabel>
						<Select
							labelId="standard-select-activate-label"
							id="standard-select-activate"
							value={activate}
							onChange={handleChangeActivate}
							fullWidth
						>
							<MenuItem value={true}>True</MenuItem>
							<MenuItem value={false}>False</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function RpmaExecuteConfigChange(props) {
	const classes = useStyles();
	const [configurationID, setConfigurationID] = useState('');
	const [dateTime, setDateTime] = useState('');

	const handleChangeConfigurationID = (e) => {
		setConfigurationID(e.target.value)
	}
	const handleChangeDateTime = (e) => {
		setDateTime(e.target.value)
	}
	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			configurationID,
			dateTime,
		}
		props.setData(data);
	}, [configurationID, dateTime])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="configurationID"
						label="Enter the configuration ID*"
						value={configurationID}
						onChange={handleChangeConfigurationID}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="past-date-time"
						label="Enter a past date and time"
						type="datetime-local"
						value={dateTime}
						onChange={handleChangeDateTime}
						// defaultValue="2017-05-24T10:30"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
			</div>
		</div>
	)
}

function MeterReading(props) {
	const classes = useStyles();

	const [state, setState] = useState({
		startDate: '',
		endDate: '',
		getProfile: true,
		getCurrentRead: true,
		getDailyDataProfile: true,
		getBillingProfile: true,
		getInstantaneousDataProfile: true,
	});
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const handleChangeStartDate = (e) => {
		setState({ ...state, startDate: e.target.value })
	}
	const handleChangeDateTimeEndDate = (e) => {
		setState({ ...state, endDate: e.target.value })
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		props.setData(state);
	}, [state])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="start-date"
						label="Start Date"
						type="datetime-local"
						value={state.startDate}
						onChange={handleChangeStartDate}
						// defaultValue="2017-05-24T10:30"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="end-date"
						label="End Date"
						type="datetime-local"
						value={state.endDate}
						onChange={handleChangeDateTimeEndDate}
						// defaultValue="2017-05-24T10:30"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<FormControlLabel
					control={<Checkbox checked={state.getProfile} onChange={handleChange} name="getProfile" color="primary" />}
					label="Get Profile"
				/>
			</div>
			<div className={classes.width100}>
				<FormControlLabel
					control={<Checkbox checked={state.getCurrentRead} onChange={handleChange} name="getCurrentRead" color="primary" />}
					label="Get Current Read"
				/>
			</div>
			<div className={classes.width100}>
				<FormControlLabel
					control={<Checkbox checked={state.getDailyDataProfile} onChange={handleChange} name="getDailyDataProfile" color="primary" />}
					label="Get Daily Data Profile"
				/>
			</div>
			<div className={classes.width100}>
				<FormControlLabel
					control={<Checkbox checked={state.getBillingProfile} onChange={handleChange} name="getBillingProfile" color="primary" />}
					label="Get Billing Profile"
				/>
			</div>
			<div className={classes.width100}>
				<FormControlLabel
					control={<Checkbox checked={state.getInstantaneousDataProfile} onChange={handleChange} name="getInstantaneousDataProfile" color="primary" />}
					label="Get Instantaneous Data Profile"
				/>
			</div>
		</div>
	)
}

function MeterReadingsSEM(props) {
	const classes = useStyles();
	const [state, setState] = useState({
		getProfile: true,
		getReading: true,
		getLastDemandReset: true,
		getCurrentRead: true,
	});
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	useEffect(() => {

	}, [props])
	useEffect(() => {
		props.setData(state);
	}, [state])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getProfile} onChange={handleChange} name="getProfile" color="primary" />}
						label="Get Profile"
					/>
				</div>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getReading} onChange={handleChange} name="getReading" color="primary" />}
						label="Get Reading"
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getLastDemandReset} onChange={handleChange} name="getLastDemandReset" color="primary" />}
						label="Get Last Demand Reset"
					/>
				</div>
				<div className={classes.width50}>
					<FormControlLabel
						control={<Checkbox checked={state.getCurrentRead} onChange={handleChange} name="getCurrentRead" color="primary" />}
						label="Get Current Read"
					/>
				</div>
			</div>
		</div>
	)
}

function GetPushSetupConfigurationSEM(props) {
	const classes = useStyles();
	const [configType, setConfigType] = useState('type1');

	const handleChangeConfigType = (e) => {
		setConfigType(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			configType,
		}
		props.setData(data);
	}, [configType])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="push-setup-config-type-label">Push Setup Config Type</InputLabel>
						<Select
							labelId="push-setup-config-type-label"
							id="push-setup-config-type"
							value={configType}
							onChange={handleChangeConfigType}
							fullWidth
						>
							<MenuItem value={'type1'}>ALARM</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ActivateAlarmFilter(props) {
	const classes = useStyles();
	const [alarms, setAlarms] = useState('1');

	const handleChangeAlarms = (e) => {
		setAlarms(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			alarms,
		}
		props.setData(data);
	}, [alarms])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
					<FormControl fullWidth>
						<InputLabel id="select-alarms-label">Select Alarms</InputLabel>
						<Select
							labelId="select-alarms-label"
							id="select-alarms"
							value={alarms}
							onChange={handleChangeAlarms}
							fullWidth
						>
							<MenuItem value={'1'}>ALARM 1</MenuItem>
						</Select>
					</FormControl>
			</div>
		</div>
	)
}

function Is15959ChangeActivityCalender(props) {
	const classes = useStyles();
	const [numberCycle, setNumberCycle] = useState('');

	const handleChangeNumberCycle = (e) => {
		setNumberCycle(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			numberCycle,
		}
		props.setData(data);
	}, [numberCycle])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-number-cycles-label">Select Number of Cycles</InputLabel>
						<Select
							labelId="select-number-cycles-label"
							id="select-number-cycles"
							value={numberCycle}
							onChange={handleChangeNumberCycle}
							fullWidth
						>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeActivityCalender3Phase(props) {
	const classes = useStyles();
	const [numberCycle, setNumberCycle] = useState('');

	const handleChangeNumberCycle = (e) => {
		setNumberCycle(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			numberCycle,
		}
		props.setData(data);
	}, [numberCycle])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-number-cycles-label">Select Number of Cycles</InputLabel>
						<Select
							labelId="select-number-cycles-label"
							id="select-number-cycles"
							value={numberCycle}
							onChange={handleChangeNumberCycle}
							fullWidth
						>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
							<MenuItem value={'5'}>5</MenuItem>
							<MenuItem value={'6'}>6</MenuItem>
							<MenuItem value={'7'}>7</MenuItem>
							<MenuItem value={'8'}>8</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeBillingDateType(props) {
	const classes = useStyles();
	const [billingDay, setBillingDay] = useState('1');

	const handleChangeBillingDay = (e) => {
		setBillingDay(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			billingDay,
		}
		props.setData(data);
	}, [billingDay])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-billing-day-label">Select Billing Day*</InputLabel>
						<Select
							labelId="select-billing-day-label"
							id="select-billing-day"
							value={billingDay}
							onChange={handleChangeBillingDay}
							fullWidth
						>
							<MenuItem value={'1'}>1</MenuItem>
							<MenuItem value={'2'}>2</MenuItem>
							<MenuItem value={'3'}>3</MenuItem>
							<MenuItem value={'4'}>4</MenuItem>
							<MenuItem value={'5'}>5</MenuItem>
							<MenuItem value={'6'}>6</MenuItem>
							<MenuItem value={'7'}>7</MenuItem>
							<MenuItem value={'8'}>8</MenuItem>
							<MenuItem value={'9'}>9</MenuItem>
							<MenuItem value={'10'}>10</MenuItem>
							<MenuItem value={'11'}>11</MenuItem>
							<MenuItem value={'12'}>12</MenuItem>
							<MenuItem value={'13'}>13</MenuItem>
							<MenuItem value={'14'}>14</MenuItem>
							<MenuItem value={'15'}>15</MenuItem>
							<MenuItem value={'16'}>16</MenuItem>
							<MenuItem value={'17'}>17</MenuItem>
							<MenuItem value={'18'}>18</MenuItem>
							<MenuItem value={'19'}>19</MenuItem>
							<MenuItem value={'20'}>20</MenuItem>
							<MenuItem value={'21'}>21</MenuItem>
							<MenuItem value={'22'}>22</MenuItem>
							<MenuItem value={'23'}>23</MenuItem>
							<MenuItem value={'24'}>24</MenuItem>
							<MenuItem value={'25'}>25</MenuItem>
							<MenuItem value={'26'}>26</MenuItem>
							<MenuItem value={'27'}>27</MenuItem>
							<MenuItem value={'28'}>28</MenuItem>
							<MenuItem value={'29'}>29</MenuItem>
							<MenuItem value={'30'}>30</MenuItem>
							<MenuItem value={'31'}>31</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeDemandIntegrationPeriod(props) {
	const classes = useStyles();
	const [timePeriod, setTimePeriod] = useState('1');

	const handleChangeTimePeriod = (e) => {
		setTimePeriod(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			timePeriod,
		}
		props.setData(data);
	}, [timePeriod])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-time-period-label">Select time period in seconds</InputLabel>
						<Select
							labelId="select-time-period-label"
							id="select-time-period"
							value={timePeriod}
							onChange={handleChangeTimePeriod}
							fullWidth
						>
							<MenuItem value={'1'}>900</MenuItem>
							<MenuItem value={'2'}>1800</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeImageActivationSchedule(props) {
	const classes = useStyles();

	const [startTime, setStartTime] = useState('');
	const handleChangeStartTime = (e) => {
		setStartTime(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			startTime
		}
		props.setData(data);
	}, [startTime])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
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
			</div>
		</div>
	)
}

function Is15959ChangeInstantaneousPushFrequency(props) {
	const classes = useStyles();
	const [frequencyLevel, setFrequencyLevel] = useState('disabled');

	const handleChangeFrequencyLevel = (e) => {
		setFrequencyLevel(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			frequencyLevel,
		}
		props.setData(data);
	}, [frequencyLevel])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-frequency-level-label">Select Frequency Level*</InputLabel>
						<Select
							labelId="select-frequency-level-label"
							id="select-frequency-level"
							value={frequencyLevel}
							onChange={handleChangeFrequencyLevel}
							fullWidth
						>
							<MenuItem value={'disabled'}>DISABLED</MenuItem>
							<MenuItem value={'15'}>15 Minutes</MenuItem>
							<MenuItem value={'30'}>30 Minutes</MenuItem>
							<MenuItem value={'60'}>1 Hour</MenuItem>
							<MenuItem value={'120'}>2 Hours</MenuItem>
							<MenuItem value={'240'}>4 Hours</MenuItem>
							<MenuItem value={'480'}>8 Hours</MenuItem>
							<MenuItem value={'720'}>12 Hours</MenuItem>
							<MenuItem value={'1440'}>24 Hours</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeLoadLimit(props) {
	const classes = useStyles();
	const [loadLimit, setLoadLimit] = useState('');

	const handleChangeLoadLimit = (e) => {
		setLoadLimit(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			loadLimit,
		}
		props.setData(data);
	}, [loadLimit])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="select-version"
						label="Load Limit*"
						value={loadLimit}
						onChange={handleChangeLoadLimit}
						fullWidth
					/>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangeMeterMode(props) {
	const classes = useStyles();
	const [mode, setMode] = useState('normal');

	const handleChangeMode = (e) => {
		setMode(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			mode,
		}
		props.setData(data);
	}, [mode])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<FormControl fullWidth>
						<InputLabel id="select-mode-label">Mode</InputLabel>
						<Select
							labelId="select-mode-label"
							id="select-mode"
							value={mode}
							onChange={handleChangeMode}
							fullWidth
						>
							<MenuItem value={'normal'}>Normal</MenuItem>
							<MenuItem value={'net'}>Net Meter</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

function Is15959ChangePassiveRelayTime(props) {
	const classes = useStyles();

	const [timeInterval, setTimeInterval] = useState('');
	const [lockoutTime, setLockoutTime] = useState('');
	const [numberAutoReconnections, setNumberAutoReconnections] = useState('');
	const [startTime, setStartTime] = useState('');
	
	const handleChangeTimeInterval = (e) => {
		setTimeInterval(e.target.value)
	}

	const handleChangeLockoutTime = (e) => {
		setLockoutTime(e.target.value)
	}

	const handleChangeNumberAutoReconnections = (e) => {
		setNumberAutoReconnections(e.target.value)
	}

	const handleChangeStartTime = (e) => {
		setStartTime(e.target.value)
	}

	useEffect(() => {

	}, [props])
	useEffect(() => {
		const data = {
			timeInterval,
			lockoutTime,
			numberAutoReconnections,
			startTime
		}
		props.setData(data);
	}, [timeInterval, lockoutTime, numberAutoReconnections, startTime])
	return (
		<div className={classes.specificBox}>
			<InputLabel>Task-specific parameters</InputLabel>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="time-interval"
						label="Time Interval*"
						value={timeInterval}
						onChange={handleChangeTimeInterval}
						fullWidth
					/>
				</div>
				<div className={classes.width50}>
					<TextField
						id="lockout-time"
						label="Lockout Time"
						value={lockoutTime}
						onChange={handleChangeLockoutTime}
						fullWidth
					/>
				</div>
			</div>
			<div className={classes.width100}>
				<div className={classes.width50}>
					<TextField
						id="number-auto"
						label="Number of Auto Reconnections*"
						value={numberAutoReconnections}
						onChange={handleChangeNumberAutoReconnections}
						fullWidth
					/>
				</div>
			</div>
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
			</div>
		</div>
	)
}
