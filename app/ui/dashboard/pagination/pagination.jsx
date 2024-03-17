"use client";
import React from 'react'
import styles from "./pagination.module.css";
import { usePathname, useSearchParams,useRouter } from 'next/navigation';


const Pagination = ({count}) => {
  const searchParams=useSearchParams()
const pathname = usePathname()
const {replace} = useRouter()
const params = new URLSearchParams(searchParams)
const page = searchParams?.get("page") || 1;
const ITEMS_PER_PAGE = 2;
const hasPrev= ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
const hasNext= ITEMS_PER_PAGE * (parseInt(page) )  < count 

const handleChangePage = (type) => {
  console.log(ITEMS_PER_PAGE,parseInt(page) - 1)
  if (type === "prev") {
    params.set("page", parseInt(page) - 1);
  } else {
    params.set("page", parseInt(page) + 1);
  }
  replace(`${pathname}?${params}`);
};

  return (
    <div className={styles.container}>
    <button
    disabled={!hasPrev}
      className={styles.button}
      onClick={() => handleChangePage("prev")}
    >
      Previous
    </button>
    <button
    disabled={!hasNext}
      className={styles.button}
      onClick={() => handleChangePage("next")}
    >
      Next
    </button>
  </div>
  )
}

export default Pagination