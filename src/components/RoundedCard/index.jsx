import React from "react";
import styles from "./index.module.css";
import { Avatar, Button } from "antd";
import "antd/dist/antd.css";

const RoundedCard = () => {
  return (
    // <section className={styles["card"]}>
    //   <h2>Companions</h2>
    //   <div className={styles["container"]}>
    //     <div className={styles["avatars"]}>
    //       <div className={styles["avatar-container"]}>
    //         <Avatar
    //           className={styles["avatar"]}
    //           src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    //         />
    //         <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
    //       </div>
    //       <div className={styles["avatar-container"]}>
    //         <Avatar
    //           className={styles["avatar"]}
    //           src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    //         />
    //         <p className={styles["avatar-info"]}>Linda Karlson, 25 years</p>
    //       </div>
    //       <div className={styles["avatar-container"]}>
    //         <Avatar
    //           className={styles["avatar"]}
    //           src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    //         />
    //         <p className={styles["avatar-info"]}>Duvan Kean, 19 years</p>
    //       </div>
    //       <div className={styles["avatar-container"]}>
    //         <Avatar
    //           className={styles["avatar"]}
    //           src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
    //         />
    //         <p className={styles["avatar-info"]}>Carol Smith, 27 years</p>
    //       </div>
    //       <div className={styles["avatar-container"]}>
    //         <Avatar
    //           className={styles["avatar"]}
    //           src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=944&q=80"
    //         />
    //         <p className={styles["avatar-info"]}>Jhon Doe, 23 years</p>
    //       </div>
    //     </div>

    //     <Button className={styles["button"]} shape="round" type="primary" style={{ height: "56px", width: "100%" }}>
    //       + Add New Companion
    //     </Button>
    //   </div>
    // </section>
    <section className={styles["card"]}>
      <h2>Companions</h2>
      <div className={styles["avatars"]}>
        <div className={styles["avatar-container"]}>
          <Avatar
            className={styles["avatar"]}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
        </div>
        <div className={styles["avatar-container"]}>
          <Avatar
            className={styles["avatar"]}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
        </div>
        <div className={styles["avatar-container"]}>
          <Avatar
            className={styles["avatar"]}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
        </div>
        <div className={styles["avatar-container"]}>
          <Avatar
            className={styles["avatar"]}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
        </div>
        <div className={styles["avatar-container"]}>
          <Avatar
            className={styles["avatar"]}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <p className={styles["avatar-info"]}>Carla Deniz, 26 years</p>
        </div>
      </div>
      <Button style={{ height: "3.5rem" }} shape="round" type="primary">
        + Add New Companion
      </Button>
    </section>
  );
};

export default RoundedCard;
