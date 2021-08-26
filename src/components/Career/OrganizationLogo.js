import React from "react";

const OrganizationLogo = ({ organizations }) => {
  const organization = organizations.filter((org) => org.picture !== null);

  return (
    <img src={organization[0].picture} data="wii" alt={organization[0].name} />
  );
};

export default OrganizationLogo;
