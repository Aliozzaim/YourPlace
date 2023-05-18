import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ali Ozzaim",
      image:
        "https://media.licdn.com/dms/image/C5603AQHKadJ6Q0xgDw/profile-displayphoto-shrink_800_800/0/1644683736278?e=1689811200&v=beta&t=utzcekJMVoN1g_CrrR911Bckxk_OifM6s_j6yT6V4P0",
      places: 18,
    },
    {
      id: "u2",
      name: "Sule Balaban",
      image:
        "https://media.licdn.com/dms/image/D4E03AQHzXI-drTxq1A/profile-displayphoto-shrink_800_800/0/1666975776366?e=2147483647&v=beta&t=lXsHhVzn2otySJ3uPx_JO2VWdbqXt9cBSaelF-713fc",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
