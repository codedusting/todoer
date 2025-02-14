"use server";

import { redirect } from "next/navigation";

import { HOMEPAGE } from "@/constants/routes";

import { deleteSession } from "./sessions";

export const logoutAction = async () => {
  await deleteSession();
  redirect(HOMEPAGE);
};
