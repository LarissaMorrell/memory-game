import React from 'react';
import { Button } from '@material-ui/core';

const WinLoseModal = ({ isWin, newGamePress }) => (
	<div className="WinLoseModal">
		{!isWin && <h1>Oh no! Time is up</h1>}
		<h1>{`You ${isWin ? "Win" : "Lose"}!`}</h1>
		<Button
			color="primary"
			size="medium"
			variant="contained"
			onClick={() => newGamePress()}
		>
			Play Again!
		</Button>
		<Button
			size="medium"
			variant="outlined"
			onClick={() => newGamePress(null)}
		>
			Change Level
		</Button>
	</div>
);

export default WinLoseModal;