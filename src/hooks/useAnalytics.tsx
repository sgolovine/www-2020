import { useMatomo } from "@datapunt/matomo-tracker-react";
import { useRouter } from "next/router";

// page-action should be used whenever a user clicks a button of performs and action
// external-link should be performed whenever a user clicks on an external link
// resume-link is a special category for actions performed inside the resume

// action should a descriptive string of what the user is doing
interface TrackProps {
  category: "page-action" | "external-link" | "resume-link";
  action: string;
}

interface PageProps {
  title: string;
}

export const useAnalytics = () => {
  const router = useRouter();

  const {
    trackEvent: matomo_trackEvent,
    trackPageView: matomo_trackPageView,
  } = useMatomo();

  const trackPageView = ({ title }: PageProps) => {
    // console.log(
    //   JSON.stringify({
    //     documentTitle: title,
    //     href: `https://sunnygolovine.com${router.pathname}`,
    //   })
    // );
    matomo_trackPageView({
      documentTitle: title,
      href: `https://sunnygolovine.com${router.pathname}`,
    });
  };

  // const trackEvent = ({ category, action }: TrackProps) =>
  //   matomo_trackEvent({
  //     category,
  //     action,
  //   });

  return {
    trackPageView,
    // trackEvent
  };
};
