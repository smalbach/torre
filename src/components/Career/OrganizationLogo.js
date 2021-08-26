/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const OrganizationLogo = ({ organizations }) => {
  const [picture, setPicture] = useState(null);
  const [organization, setOrganization] = useState(organizations[0]);
  //console.log({ organizations });
  useEffect(() => {
    try {
      console.log("Reading org");
      const auxOrg = organizations.filter((org) => org.picture !== null);

      if (auxOrg) {
        setOrganization(auxOrg);
        setPicture(organization.picture);
      }
      if (organizations[0].picture) {
      }
    } catch (err) {
      setPicture(null);
    }
  }, []);

  return (
    <>{picture ? <img src={picture} alt={organization[0].name} /> : null}</>
  );
};

export default OrganizationLogo;
