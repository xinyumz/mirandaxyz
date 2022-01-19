import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import "react-pro-sidebar/dist/css/styles.css";

function Overlay({ toggled }) {
  return toggled ? (
    <div
      style={{
        backgroundColor: "#0000004d",
        width: "100%",
        height: "3.5rem",
        position: "absolute",
        bottom: 0,
      }}
    ></div>
  ) : null;
}

export default function Sidebar({ toggled, handleToggleSidebar }) {
  const smallScreen = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <ProSidebar
        breakPoint="md"
        width={230}
        toggled={toggled}
        onToggle={handleToggleSidebar}
        style={{ height: "calc(100vh - 3.5rem)" }}
      >
        <SidebarHeader
          style={{
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 18,
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Research Projects
        </SidebarHeader>
        <SidebarContent
          style={{
            paddingTop: 10,
            lineHeight: 2.5,
            fontSize: 14,
            overflow: "auto",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Menu>
            <MenuItem
              style={{
                fontSize: 16,
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Overview
              <Link to="/research" />
            </MenuItem>
            <MenuItem style={{ fontSize: 16, fontWeight: "bold" }}>
              Polymer Syntheses
              <Link to="/research/polymer-syntheses" />
            </MenuItem>
            <MenuItem style={{ lineHeight: 2 }}>
              1. Oxysilylation{" "}
              <Link to="/research/polymer-syntheses/oxysilylation" />
            </MenuItem>

            <SubMenu
              style={{ lineHeight: 2, fontStyle: "italic" }}
              title="2. Novel SSEs *"
            >
              <MenuItem>
                Intro <Link to="/research/polymer-syntheses/novel-sses" />
              </MenuItem>
              <MenuItem>
                Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
                <Link to="/research/polymer-syntheses/novel-sses/lipon" />
              </MenuItem>
              <MenuItem>
                Li<sub>x</sub>SiON
                <Link to="/research/polymer-syntheses/novel-sses/lision" />
              </MenuItem>
              <MenuItem>
                Next Steps
                <Link to="/research/polymer-syntheses/novel-sses/next-steps" />
              </MenuItem>
            </SubMenu>
            <MenuItem style={{ lineHeight: 2 }}>
              3. M-HMDS <Link to="/research/polymer-syntheses/m-hmds" />
            </MenuItem>

            <SubMenu
              style={{ fontSize: 16, fontWeight: "bold" }}
              title="Ceramic Processing"
            >
              <MenuItem style={{ lineHeight: 1, fontWeight: "normal" }}>
                ZTA Ceramics
                <Link to="/research/ceramics" />
              </MenuItem>
            </SubMenu>

            <MenuItem style={{ fontSize: 16, fontWeight: "bold" }}>
              List of Publications
              <Link to="/research/publications" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter
          style={{
            paddingTop: 10,
            paddingBottom: 12,
            paddingLeft: 8,
            fontSize: 13,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontStyle: "italic",
          }}
        >
          *Most important projects.
        </SidebarFooter>
      </ProSidebar>

      {smallScreen ? <Overlay toggled={toggled} /> : null}

      <div
        className={`app ${toggled ? "toggled" : ""}`}
        onClick={() => handleToggleSidebar(true)}
        style={{
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 10,
        }}
      >
        <MenuIcon
          sx={{
            cursor: "pointer",
            backgroundColor: "#252525cc",
            color: "#fff",
            textAlign: "center",
            borderRadius: "50%",
            height: "1.4rem",
            width: "1.4rem",
            padding: "20%",
            boxShadow: "2px 2px 4px 3px #d3d3d3cc",
            position: "relative",
            zIndex: "1000",
            "&:hover": {
              backgroundColor: "#505050cc",
              boxShadow: "3px 3px 5px #a9a9a9cc",
            },
          }}
        />
      </div>
    </div>
  );
}
