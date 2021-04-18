import React from "react";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { ProviderProps } from "~/model";

const instance = createInstance({
  urlBase: "https://stats.glvn.co/",
  siteId: 3,

  // Disable in development
  disabled: process.env.NODE_ENV === "development",

  // Check how long a user spends on the page
  // Visits lasting < 10 seconds will not be counted
  heartBeat: {
    active: true,
    seconds: 10,
  },

  // Disable link tracking
  // We will track them manually
  linkTracking: false,

  configurations: {
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: "POST",
  },
});

export const AnalyticsProvider: React.FC<ProviderProps> = ({ children }) => {
  return <MatomoProvider value={instance}>{children}</MatomoProvider>;
};
