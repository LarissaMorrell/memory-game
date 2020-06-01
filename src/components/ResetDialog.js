import React from 'react';
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const ResetDialog = ({ resetGamePress, cancelPress }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	
	return (
		<Dialog
			fullScreen={fullScreen}
			open={true}
			onClose={cancelPress}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">
				{"Reset Game"}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						So you've made a mess of it, have you? Quitters don't get very far, but if you want to reset this round it will count against you as a loss.
					</DialogContentText>
				</DialogContent>
			<DialogActions>
				<Button
					color="primary"
					onClick={() => resetGamePress()}
				>
					Play Again!
				</Button>
				<Button
					onClick={() => resetGamePress(null)}
				>
					Change Level
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ResetDialog;