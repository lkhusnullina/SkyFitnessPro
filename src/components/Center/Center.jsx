import React from 'react'
import styles from "./Center.modules.css"

export  function Center({children}) {
  return (
    <div className={styles.center}>{children}</div>
  )
}
