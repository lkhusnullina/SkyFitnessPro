import { Outlet, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import styles from './LayoutPage.module.css'
import Header from '../../components/header/Header'

const LayoutPage = () => {
  const location = useLocation()
  const home = location.pathname === '/'
  const cn = classNames({
    [styles.body]: true,
    [styles.body_dark]: home,
  })
  return (
    <div className={cn}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export { LayoutPage }
