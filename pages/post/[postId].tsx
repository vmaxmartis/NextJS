import { Router, useRouter } from "next/router";
import * as React from "react";

export interface PostDetailPage {}
export default function PostDetailPage(props: PostDetailPage) {
  const router = useRouter();
  return (
    <>
      <div> Post Detail Page </div>
      <h2>
          Query : {JSON.stringify(router.query  )}
      </h2>
    </>
  );
}
