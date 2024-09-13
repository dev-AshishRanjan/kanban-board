import React, { useCallback, useEffect, useState } from 'react';
import { Ticket, User } from './interfaces';
import './App.css'

const GET_TICKETS_URL: any = process.env.REACT_APP_GET_TICKETS_URL;
function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});
  const [grouping, setGrouping] = useState<string>("status");
  const [ordering, setOrdering] = useState<string>("priority");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL).then(resp => resp.json()).then(res => {
      const { tickets, users } = res;
      setTickets(tickets);
    }).catch(err => { });
  }, [])

  useEffect(() => {
    if (!tickets.length)
      return;
    // setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets])

  const onSetGrouping = useCallback((value: string) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value: string) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data: Record<string, string>) => {
    for (let key in data)
      localStorage.setItem(key, data[key]);
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
