import React from 'react';
import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import './Overlay.css';

const Overlay = ({ content, closeOverlay }) => {

	return (
		<div className="Overlay">
			<div className="content">
				{closeOverlay && (
					<IconButton
						aria-label="close"
						className="close-button"
						size="small"
						onClick={closeOverlay}
					>
          	<Close fontSize="inherit" />
					</IconButton>
				)}
				{content}
			</div>
		</div>
	);
}

export default Overlay;