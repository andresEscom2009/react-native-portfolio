import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUserAction } from "../actions/load-users.action";

export const useUsers = () => {
  const [users, setusers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUserAction(1).then(setusers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUserAction(currentPageRef.current);

    if (users.length > 0) {
      setusers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
    currentPageRef.current--;
    const users = await loadUserAction(currentPageRef.current);
    setusers(users);
  };

  return {
    users,

    nextPage,
    prevPage,
  };
};
