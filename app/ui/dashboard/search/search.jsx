"use client"
import React from 'react'
import styles from "@/app/ui/dashboard/search/search.module.css";
import { MdSearch } from 'react-icons/md';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const Search = ({placeholder}) => {
const searchParams=useSearchParams()
const pathname = usePathname()
const {replace} = useRouter()
const params = new URLSearchParams(searchParams)

const handleChange = useDebouncedCallback((e) => {
  const value = e.target.value
  const params = new URLSearchParams(searchParams)

  if (e.target.value ) {
    if(e.target.value.length >2 )  params.set('q', value)
  }
  else {
    params.delete('q')
  }

  replace(`
  ${pathname}?${params}`)
}
, 300)

  return (
    <div className={styles.container}>
    <MdSearch />
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onChange ={handleChange}
  
    />
  </div>
  )
}

export default Search