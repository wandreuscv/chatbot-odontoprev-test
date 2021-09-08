import React, { useState, useEffect } from 'react';
import './style.css';

export default function App(props) {
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
      {frame}
    </main>
  );
}
