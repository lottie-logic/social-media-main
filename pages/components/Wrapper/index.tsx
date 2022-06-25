import * as React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../Layout";

export default function Wrapper(props) {
  const session = useSession();
  const router = useRouter();

  if (
    session === null ||
    router.pathname === "/" ||
    router.pathname === "/register"
  ) {
    return <>{props.children}</>;
  }
  if (
    (session !== null && session?.status === "authenticated") ||
    router.pathname === "/"
  ) {
    return (
      <>
        <Layout>{props.children}</Layout>
      </>
    );
  }
  if (session === null)
    router.pathname === "/home" ||
      router.pathname === "/profile" ||
      router.pathname === "/explore";
  {
    return (
      <>
        <h1>You are not authenticated</h1>

        <Link href="/">Back to Login</Link>
      </>
    );
  }
}
