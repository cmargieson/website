import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function MotorbikeRoutes() {
  return (
    <Layout title="Motorcycle Routes" description="Hello React Page">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1Tm5RqdFsrFcYRqie33kumnOs5JbV-JA&ehbc=2E312F&noprof=1"
        className={styles.iframe}
      ></iframe>
    </Layout>
  );
}
