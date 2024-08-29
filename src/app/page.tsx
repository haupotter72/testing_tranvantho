import Image from "next/image";
import styles from "./test.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Home() {
  return <div className={cx("test")}></div>;
}
