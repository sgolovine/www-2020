// Checks if the given route matches
// the current route
import { useRouter } from "next/router";
import { Routes } from "~/model";

export const useLinkMatch = (route: Routes) => {
  const router = useRouter();
  return router.pathname === route;
};
