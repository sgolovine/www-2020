import React, { useContext } from "react";
import { LocationIcon } from "~/components/icons/Location";
import { Avatar } from "~/components/links/Avatar";
import { LinkButton } from "~/components/links/LinkButton";
import linksContext from "~/context/LinksContext";
import { isMobile } from "react-device-detect";
import Layout from "~/components/links/Layout";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const data = useContext(linksContext);

  const handleAddToContacts = () => {
    // navigate(vcard);
  };

  const handleContact = () => {
    router.push("/landing/links/contact");
    // navigate("/contact");
  };

  return (
    <Layout>
      <Avatar />
      <div className="flex flex-col items-center py-4">
        <h1 className="text-lg font-semibold">{data.name}</h1>
        <a
          className="flex flex-row items-center py-2"
          href={data.location.link}
        >
          <LocationIcon fillColor="#444" />
          <p className="text-sm font-light text-gray-600">
            {data.location.label}
          </p>
        </a>
        <div className="my-2">
          <p className="text-sm">{data.bio}</p>
        </div>
      </div>
      <div className="flex flex-col">
        {isMobile && (
          <button
            onClick={handleAddToContacts}
            className="p-4 my-2 bg-red-400 shadow-md rounded-md"
          >
            <p className="text-gray-800 font-bold">Add to Contacts</p>
          </button>
        )}
        <button
          onClick={handleContact}
          className="p-4 my-2 bg-green-400 shadow-md rounded-md"
        >
          <p className="text-gray-800 font-bold">Send Message</p>
        </button>
      </div>
      <hr className="py-2" />
      <div className="flex flex-col">
        {data.links.map((link) => {
          return (
            <LinkButton
              name={link.name}
              href={link.href}
              key={link.key}
              itemKey={link.key}
            />
          );
        })}
      </div>
    </Layout>
  );
};

// ts-prune-ignore-next
export default HomePage;
