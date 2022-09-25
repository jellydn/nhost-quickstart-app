import { useUserContext } from "../UserProvider";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";
import withAuth from "../withAuth";
import Head from "next/head";

const Home = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles["welcome-text"]}>
          Welcome, {user?.metadata?.firstName || "stranger"}{" "}
          <span role="img">👋</span>
        </p>

        <p className={styles["info-text"]}>
          Edit the <code>pages/index.tsx</code> file to populate this page.
        </p>
      </div>
    </Layout>
  );
};

export default withAuth(Home);
