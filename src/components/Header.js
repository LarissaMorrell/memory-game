import React from 'react';
import { AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core';
import Timer from './Timer';

const Header = ({ gameID, score, paused, handleWinLoseGame }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    scoring: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.breakpoints.up('sm')]: {
        alignItems: 'flex-end',
      },
    }
  }));

  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h5"
        >
          Memory Game
        </Typography>
        <div className={classes.scoring}>
          <Typography variant="h6">
            {`Wins: ${score.wins}, Losses: ${score.losses}`}
          </Typography>
          <Timer
            gameID={gameID}
            paused={paused}
            handleLoseGame={() => handleWinLoseGame(false)}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
