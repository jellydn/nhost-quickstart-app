import styles from "../styles/components/Avatar.module.css";
import Image from "next/image";

const Avatar = ({ src = "", alt = "" }) => (
  <div className={styles.avatar}>
    {src ? <Image height={80} width={80} src={src} alt={alt} /> : null}
  </div>
);

export default Avatar;
