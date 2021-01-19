import React from "react";
import DPNav from "../../components/DPNav/DPNav";

// const colors = [
//   "white",
//   "black",
//   "blue",
//   "green",
//   "pink",
//   "red",
//   "purple",
//   "yellow",
//   "gray",
//   "lilac",
// ];

function Dashboard() {
  const [value, setValue] = React.useState(0);

  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       setValue((v) => (v === 9 ? 0 : v + 1));
  //     }, 1000);
  //   }, []);

  return (
    <>
      <div
      //   style={{ backgroundColor: colors[value] }}
      >
        <DPNav></DPNav>
      </div>
    </>
  );
}

export default Dashboard;
