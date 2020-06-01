import React from 'react';
import {
	Button,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	Dialog,
	useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const WinLoseDialog = ({ isWin, newGamePress }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Dialog
			fullScreen={fullScreen}
			open={true}
			aria-labelledby="win-lose-dialog"
		>
			<DialogTitle id="win-lose-dialog">
				{`You ${isWin ? "Win" : "Lose"}!`}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{isWin ? (
							"Wow! Is there anything you won't forget? You win this round. How about another one?"
						) : (
							"Time has run out, but don't worry - the best way to improve is to keep trying."
					)}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					color="primary"
					onClick={() => newGamePress()}
				>
					Play Again!
				</Button>
				<Button
					onClick={() => newGamePress(null)}
				>
					Change Level
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default WinLoseDialog;