import React, { useContext } from "react";
import PageHeader from "~/components/common/PageHeader";
import ContactForm from "~/components/contact/ContactForm";
import SocialLink from "~/components/contact/SocialLink";
import siteContext from "~/context/SiteContext";
import { SocialLinkTypes } from "~/model/Context";

const ContactPage = () => {
  const { links, contactInfo } = useContext(siteContext);
  const linkKeys = Object.keys(links) as SocialLinkTypes[];

  return (
    <>
      <PageHeader headerText="Contact Me" />
      <p>
        You can contact me by sending a me a message below. You can also reach
        me by email at{" "}
        <a
          className="text-blue-600 hover:underline"
          href={`mailto:${contactInfo.email}`}
        >
          sunny@glvn.co
        </a>
      </p>
      <div className="flex flex-row justify-center">
        <ContactForm />
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-10">
        {linkKeys.map((key) => {
          return <SocialLink key={key} href={links[key]} type={key} />;
        })}
      </div>
    </>
  );
};

// ts-prune-ignore-next
export default ContactPage;
