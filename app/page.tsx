"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { User } from "./types/user";

import Gallery from "./gallery";

export type PageProps = {
  users: User[];
};

export default function Home() {
  const [users, setUsers] = useState<PageProps[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const jsonPlaceHolderData = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'});
      const randomAPIData = await fetch('https://random-data-api.com/api/v2/users?size=10', {method: 'GET'});

      const userDataOne = await jsonPlaceHolderData.json() ?? [];
      const userDataTwo = await randomAPIData.json() ?? [];
      const userDataFinal = [...userDataOne, ...userDataTwo];

      setUsers(userDataFinal);
    };

    fetchAPI();
  }, []);

  return (
    <main className={styles.main}>
      {users?.length ? <Gallery users={users} /> : null}
    </main>
  );
}
