"use client";
import React from "react";
import { message } from "antd";

import NotFound from "@/components/ui/not-found/NotFound";
import PlayListAdd from "./PlayListAdd";
import styles from "./PlayList.module.scss";


const PlayList = () => {
  const [messageApi, contextHolder] = message.useMessage();


  let output = <NotFound>PlayList</NotFound>;

  const messageShowHandler = (type: "success" | "error", content: string) => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <div className={styles.playlist}>
      {output}
      <PlayListAdd onShowMessage={messageShowHandler} />
      {contextHolder}
    </div>
  );
};

export default PlayList;
