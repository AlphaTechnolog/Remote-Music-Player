import React, { useState, useEffect, createContext } from 'react';
import client from '../client';
import { API_PATH } from '../config.json';

export const globalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [path, setPath] = useState('');
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [actualPlayerMusic, setActualPlayerMusic] = useState('');
  const [completePlayerMusic, setCompletePlayerMusic] = useState('');

  const fmtPath = (pathname) => {
    return pathname === '' ? '/' : pathname.replace(/!/g, '/')
  }

  useEffect(() => {
    if (actualPlayerMusic !== '') {
      setCompletePlayerMusic(`${API_PATH}/get${fmtPath(path)}/${actualPlayerMusic}`);
    } else {
      setCompletePlayerMusic('');
    }
    // eslint-disable-next-line
  }, [actualPlayerMusic]);

  useEffect(() => {
    setShowPlayer(completePlayerMusic !== '');
  }, [completePlayerMusic]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setContent((await client.getContent(path)));
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, [path]);

  return (
    <globalContext.Provider value={{
      path,
      setPath,
      content,
      setContent,
      loading,
      setLoading,
      fmtPath,
      showPlayer,
      setShowPlayer,
      actualPlayerMusic,
      setActualPlayerMusic,
      completePlayerMusic,
      setCompletePlayerMusic
    }}>
      {children}
    </globalContext.Provider>
  )
}
