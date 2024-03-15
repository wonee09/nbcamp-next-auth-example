"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const NavBar = () => {
  const session = useSession();
  const isLoggedIn = session.status === "authenticated" ? true : false;

  console.log("====================================");
  console.log("isLoggedIn => ", isLoggedIn);
  console.log("====================================");
  return (
    <nav className="flex justify-between mb-4">
      <section>HOME</section>
      <section className="flex gap-4">
        {isLoggedIn ? (
          <button
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
          >
            로그인
          </button>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
