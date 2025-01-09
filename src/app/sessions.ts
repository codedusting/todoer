"use server";

import l from "@/lib/winston";

export const createSession = async () => {};

export const verifySession = async () => {};

export const deleteSession = async () => {
  l.info("Logged out!");
};
