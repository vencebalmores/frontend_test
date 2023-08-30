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
      const data = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'});
      const userData = await data.json();

      setUsers(userData);
    };

    fetchAPI();
  }, []);

  return (
    <main className={styles.main}>
      {users?.length ? <Gallery users={users} /> : null}
    </main>
  );
}
