import React from 'react';
import { Button } from '@material-ui/core';

const WinLoseModal = ({ type, endGamePress }) => {
	let content;
	if (type === "win")
		content = <h1>You Win!</h1>;
	else if (type === "lose")
		content = <h1>You Lose!</h1>;
	else if (type === "reset")
		content = (
			<div>
				<h1>Are you sure?</h1>
				<p>You will be forfeiting this round.</p>
			</div>
		);

	return (
		<div className="WinLoseModal">
			{content}
			<Button
				color="primary"
				size="medium"
				variant="contained"
				onClick={() => endGamePress(false)}
			>
				Play Again!
			</Button>
			<Button
				size="medium"
				variant="outlined"
				onClick={() => endGamePress(true)}
			>
				Change Level
			</Button>
		</div>
	);
}

export default WinLoseModal;