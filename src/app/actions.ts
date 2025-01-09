"use server";

import { HOMEPAGE } from "@/constants/routes";
import { redirect } from "next/navigation";
import { deleteSession } from "./sessions";

export const logoutAction = async () => {
  await deleteSession();
  redirect(HOMEPAGE);
};
