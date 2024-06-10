import * as React from "react";
import HamburgerIcon from "@/icons/burgermenu.svg";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import KoelIcon from "@/icons/Koel Bird with branch.svg";

import "./Header.css";

export default function ButtonAppBar() {
  return (

    <div className="HeaderSection">
      <div className="HeaderLeft">
        <Image src={KoelIcon} className="h-16 w-40" alt="KoelIcon" />
        <div className="text-5xl">
          <p className="">KOEL</p>
        </div>

      </div>
    </div>
  );
}
