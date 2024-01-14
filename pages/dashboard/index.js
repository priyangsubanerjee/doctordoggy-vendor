import { signOut, useSession } from "next-auth/react";
import React from "react";

function Dashboard() {
  return (
    <div className="pt-32">
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

export default Dashboard;
