import { DashboardLogo } from './dashboard-logo';
import { OtherRoutes } from './otherRoutes';
import styles from './sidebar.module.css';
import { SidebarRoutes } from './sidebarRoutes';




export const Sidebar = () => {

  return (
    <div className={styles.sidebar_container}>
      <div className="px-4 py-2">
        <DashboardLogo />
      </div>
      <div className={styles.content}>
        <SidebarRoutes />
      </div>
      <br />
      <br />
      <br />
      <div className={styles.content}>
        <OtherRoutes />
      </div>
    </div>
  );
};
