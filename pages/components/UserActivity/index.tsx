import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Post.module.css";
import * as React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import "react-activity-feed/dist/index.css";
import { connect } from "getstream";
import { Form, Input, Button, Dialog, Card } from "antd-mobile";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  LikeButton,
  Activity,
  CommentList,
  CommentField,
  StatusUpdateForm,
  FollowButton,
  NotificationFeed,
} from "react-activity-feed";
import stream from "getstream";
import { useContext, useEffect } from "react";
import { useUserState } from "../../../context/user";

//find out if current user is following

const UserActivity = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home f</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>See this on press</h1>
        </main>
      </div>
    </>
  );
};

export default UserActivity;