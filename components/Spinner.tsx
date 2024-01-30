import Image from "next/image";
import * as React from "react";
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";

export default function Spinner() {
  return (
    <div className="w-full flex justify-center opacity-50">
      <Image
        src={`/ReUsableComponentData/Spinner.svg`}
        alt={"spinner"}
        width={60}
        height={60}
      />
    </div>
    // <Box sx={{ width: "100%" }}>
    //   <LinearProgress />
    // </Box>
  );
}
