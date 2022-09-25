import Spinner from "./components/Spinner";
import styles from "./styles/pages/ProtectedRoute.module.css";
import { useAuthenticationStatus } from "@nhost/nextjs";
import { useRouter } from "next/router";

export default function withAuth(Component) {
  return function AuthProtected(props) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    if (isLoading) {
      return (
        <div className={styles.container}>
          <Spinner />
        </div>
      );
    }

    if (!isAuthenticated) {
      router.push("/sign-in");
      return null;
    }

    return <Component {...props} />;
  };
}
