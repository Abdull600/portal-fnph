import { Logo } from '@/components/logo';
import styles from './sidebar.module.css';
import { SidebarRoutes } from './sidebarRoutes';



export const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div className="px-4 py-2">
        <Logo />
      </div>
      <div className={styles.content}>
       <SidebarRoutes />
      </div>
    </div>
  );
};
