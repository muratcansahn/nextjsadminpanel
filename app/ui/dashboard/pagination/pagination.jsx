import React from 'react'
import styles from "./pagination.module.css";


const Pagination = () => {
  return (
    <div className={styles.container}>
    <button
      className={styles.button}
    //   disabled={!hasPrev}
    //   onClick={() => handleChangePage("prev")}
    >
      Previous
    </button>
    <button
      className={styles.button}
    //   disabled={!hasNext}
    //   onClick={() => handleChangePage("next")}
    >
      Next
    </button>
  </div>
  )
}

export default Pagination