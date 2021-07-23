// import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { readAlarms } from "./../../redux/actions";
import { FormattedMessage } from "react-intl";
import { FormControlLabel, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { orange } from '@material-ui/core/colors';

import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';

import { ToastContainer, toast } from 'react-toast';
import { green } from '@material-ui/core/colors';
import { taskLog } from "../../data/taskLogData";

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
});

export const EditButton = ({
	selectedRow,
	setSelectedRow
}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setSelectedRow(selectedRow)
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return <FormControlLabel
		control={
			<div>
				<IconButton color="secondary"
					aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
					<EditIcon style={{ color: orange[500] }} />
				</IconButton>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem>Rerun</MenuItem>
				</Popover>
			</div>
		}
	/>
};

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const [selectedRow, setSelectedRow] = useState();
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.taskDefinition.name}
				</TableCell>
				<TableCell align="left">{row.taskDefinition.templateNameValue}</TableCell>
				<TableCell align="center">{row.startTime}</TableCell>
				<TableCell align="center">{row.endTime}</TableCell>
				<TableCell align="center">{row.status}</TableCell>
				<TableCell align="center">{row.usrEmail}</TableCell>
				<TableCell align="center">
					<EditButton
						selectedRow={row}
						// setOpenDialog={setOpenDialog}
						setSelectedRow={setSelectedRow}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<VerticalTabs row={row} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function TaskLog() {
	const dispatch = useDispatch();
	const [openSeverityDialog, setOpenSeverityDialog] = useState(false);
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const [openCloseAlarmDialog, setOpenCloseAlarmDialog] = useState(false);

	const [pageTaskLog, setPageTaskLog] = useState(0);
	const [rowsPerPageTaskLog, setRowsPerPageTaskLog] = useState(10);

	const handleChangePageTaskLog = (event, newPage) => {
		setPageTaskLog(newPage);
	};

	const handleChangeRowsPerPageTaskLog = (event) => {
		setRowsPerPageTaskLog(+event.target.value);
		setPageTaskLog(0);
	};

	// const historyList = useSelector(
	// 	(state) => state.historyReducer.historyData || []
	// );
	const historyList = taskLog[0].data;
	const isUpdate = useSelector(
		(state) => state.historyReducer.status || false
	);

	const handleDialogClose = () => {
		setOpenSeverityDialog(false);
		setOpenCreateDialog(false);
		setOpenCloseAlarmDialog(false);
	}

	useEffect(() => {
		if (isUpdate) {
			toast('The task has been created', {
				backgroundColor: green[900],
				color: "#ffffff"
			})
		}
		dispatch(readAlarms("/alarms"))
	}, [isUpdate]);

	return (
		<div>
			<h1>
				<FormattedMessage id="task.log" defaultMessage="Task Log" />
			</h1>
			<div style={{ height: "90vh", width: "100%" }}>
				<TableContainer component={Paper}>
					<Table stickyHeader aria-label="Schedule Task">
						<TableHead>
							<TableRow>
								<TableCell />
								<TableCell align="left">Task Name</TableCell>
								<TableCell align="left">Template</TableCell>
								<TableCell align="center">Start Date</TableCell>
								<TableCell align="center">End Date</TableCell>
								<TableCell align="center">Status</TableCell>
								<TableCell align="center">UserID</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							{historyList.slice(pageTaskLog * rowsPerPageTaskLog, pageTaskLog * rowsPerPageTaskLog + rowsPerPageTaskLog).map((row) => (
								<Row key={row.id} row={row} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={historyList.length}
					rowsPerPage={rowsPerPageTaskLog}
					page={pageTaskLog}
					onPageChange={handleChangePageTaskLog}
					onRowsPerPageChange={handleChangeRowsPerPageTaskLog}
				/>
			</div>
			{/* <ChangeSeverityDialog isOpen={openSeverityDialog} handleClose={handleDialogClose} selectedRow={selectedRow} /> */}
			{/* <AcknowledgeDialog isOpen={openCreateDialog} handleClose={handleDialogClose} selectedRow={selectedRow} /> */}
			{/* <CloseAlarmDialog isOpen={openCloseAlarmDialog} handleClose={handleDialogClose} selectedRow={selectedRow} /> */}
			<ToastContainer position="bottom-center" delay={5000} />
		</div>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
	},
	subTableCell: {
		padding: '5px',
		borderRight: '1px solid #e0e0e0'
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	tableRoot: {
		margin: '0 auto',
		width: 'unset'
	},
	width100: {
		width: '100%'
	},
	widthUnset: {
		width: 'unset'
	}
}));

function VerticalTabs(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const { row } = props;
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
				indicatorColor="primary"
			>
				<Tab label="Information" {...a11yProps(0)} />
				<Tab label="Executions" {...a11yProps(1)} />
				<Tab label="Statistics" {...a11yProps(2)} />
			</Tabs>
			<TabPanel className={classes.width100} value={value} index={0}>
				<TableContainer className={classes.widthUnset}>
					<Table className={classes.tableRoot}>
						<TableBody>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Priority</TableCell>
								<TableCell align="left" className={classes.subTableCell}>{row.taskDefinition.priorityText}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Retry Amount</TableCell>
								<TableCell align="left" className={classes.subTableCell}>{row.taskDefinition.retryAmount}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Retry delay(mins)</TableCell>
								<TableCell align="left" className={classes.subTableCell}>{row.taskDefinition.retryDelay}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Configuration file identifier</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Configuration file signature</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Configuration file size</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Group</TableCell>
								<TableCell align="left" className={classes.subTableCell}>{row.taskDefinition.groups.join(',')}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Device</TableCell>
								<TableCell align="left" className={classes.subTableCell}>{row.taskDefinition.devices.join(',')}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
			<TabPanel className={classes.width100} value={value} index={1}>
				<TableContainer>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Target</TableCell>
								<TableCell align="left">Messages</TableCell>
								<TableCell align="left">Start Date</TableCell>
								<TableCell align="left">End Date</TableCell>
								<TableCell align="left">Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										<TableCell align="left"></TableCell>
										<TableCell align="left"></TableCell>
										<TableCell align="left"></TableCell>
										<TableCell align="left"></TableCell>
									</TableRow>
								);
							})} */}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					// count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TabPanel>
			<TabPanel className={classes.width100} value={value} index={2}>
				<TableContainer className={classes.widthUnset}>
					<Table className={classes.tableRoot}>
						<TableBody>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Success</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Failures</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>In Progress</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Rejected</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Total Tasks</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left" className={classes.subTableCell}>Total Devices</TableCell>
								<TableCell align="left" className={classes.subTableCell}></TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</TabPanel>
		</div>
	);
}