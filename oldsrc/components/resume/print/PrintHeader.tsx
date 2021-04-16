import React from "react";
import { stripHttp } from "~/helpers/stripHttp";
import { ContactInfo } from "~/model/Resume";
import { OutboundLink } from "../OutboundLink";

type Props = {
  contactInfo: ContactInfo;
};

export const PrintHeader: React.FC<Props> = ({ contactInfo }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <h1 className="text-xl font-bold mb-2">Sunny Golovine</h1>
      <span className="text-sm flex flex-row">
        <OutboundLink
          href={`mailto:${contactInfo.email}`}
          className="mx-2"
          name={stripHttp(contactInfo.email)}
        />
        <p>&middot;</p>
        <OutboundLink
          href={`tel:${contactInfo.phone}`}
          className="mx-2"
          name={stripHttp(contactInfo.phone)}
        />
        <p>&middot;</p>
        <OutboundLink
          href={contactInfo.website}
          className="mx-2"
          name={stripHttp(contactInfo.website)}
        />
      </span>
      <span className="text-sm flex flex-row mt-2">
        <OutboundLink
          href={contactInfo.linkedin}
          className="mx-2"
          name={stripHttp(contactInfo.linkedin)}
        />
        <p>&middot;</p>
        <OutboundLink
          href={contactInfo.github}
          className="mx-2"
          name={stripHttp(contactInfo.github)}
        />
      </span>
    </div>
  );
};
