import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Image from 'next/image';
import { fetchUsers } from '@/app/lib/data';
const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users)
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a user..." />
      <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
     
          <tr key={user?._id}>
            <td>
              <div className={styles.user}>
                <Image
                  src={user.img}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
             {user.name}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt}
            </td>
            <td>{user.isAdmin} </td>
            <td>{user.isActive} </td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/test`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form >
                  <input type="hidden" name="id"  />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination  />
  </div>
);
};


 


export default UsersPage