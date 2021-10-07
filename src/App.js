import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function App(props) {
  const classes = useStyles();
  const [frame, setFrame] = useState();

  useEffect(() => {
    if (frame === undefined)
      setFrame(
        <iframe src="https://webchat.botframework.com/embed/OdontoChatBot?s=sAwl0hf_qg4.Bt73IXUFO70u7FHb1j__PDKlUPK13TGbuXRorrQgIlg" />
      );
  }, [frame]);

  function reloadChat() {
    setFrame(undefined);
  }

  return (
    <main>
      <div>
        <button onClick={reloadChat}>Reiniciar chat</button>
      </div>
      <div>
        <Avatar
          alt="Acon"
          className={classes.orange}
          src="/static/images/avatar/1.jpg"
        />
      </div>
      <ReactWebChat directLine={this.directLine} userID="YOUR_USER_ID" />
      {frame}
    </main>
  );
}
