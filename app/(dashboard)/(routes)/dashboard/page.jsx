import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2 flex-start items-start justify-center pt-[50px]">
      <h1 className={styles.heading_text}>Welcome Adekunle,</h1>
      <p className={styles.subheading_text}>
        Let&#8217;s begin admission process.
      </p>
    </div>
  );
}