import React from "react";
import styles from "./index.module.css";
import { Avatar, Button } from "antd";
import "antd/dist/antd.css";

const RoundedCard = () => {
  return (
    <section className={styles["card"]}>
      <h2>Companions</h2>
      <div className={styles["avatars"]}>
        <Avatar size={48}>U</Avatar>
        <Avatar size={48}>U</Avatar>
        <Avatar size={48}>U</Avatar>
        <Avatar size={48}>U</Avatar>
        <Avatar size={48}>U</Avatar>
      </div>
      <Button className={styles["button"]} type="primary" shape="round">
        + Add New Companion
      </Button>
    </section>
  );
};

export default RoundedCard;
