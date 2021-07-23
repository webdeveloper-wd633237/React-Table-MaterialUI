import React from 'react';
import {  useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import TaskLog from './components/taskLog/TaskLog'
import CreateTaskDialog from './components/dialogs/CreateTaskDialog';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	menuButtonBox: {
		borderRight: '1px solid rgba(0, 0, 0, 0.12)',
		height: '100%',
		position: 'fixed'
	},
	menuButton: {
		height: '45px',
		marginTop: '10px',
		// padding: 0
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth+40,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

export default function App() {
	const history = useHistory();
	const classes = useStyles();
	const theme = useTheme();

  const [openCreateDialog, setOpenCreateDialog] = React.useState(false);
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const goToPage = (path) => {
		history.push(path);
	}

  const openCreateModal = () => {
    setOpenCreateDialog(true);

  }

  const handleDialogClose = () => {
    setOpenCreateDialog(false);
  }

	return (
		<div className={classes.root}>
			<CssBaseline />
			<div className={clsx(classes.menuButtonBox, open && classes.hide)}>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton, open && classes.hide)}
				>
					{theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button onClick={() => goToPage('/tasklog')}>
						<ListItemIcon><CheckIcon /></ListItemIcon>
						<ListItemText primary={'Task Log'}/>
					</ListItem>
					<ListItem button onClick={() => goToPage('/taskschedule')}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary={'Task Schedule'}/>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button onClick={openCreateModal}>
						<ListItemIcon><AddIcon /></ListItemIcon>
						<ListItemText primary={'Create Task'}/>
					</ListItem>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<TaskLog />
			</main>      
			<CreateTaskDialog isOpen={openCreateDialog} handleClose={handleDialogClose} selectedRow={'new'} />
		</div>
	);
}

