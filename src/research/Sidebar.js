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
import "react-pro-sidebar/dist/css/styles.css";
//import styles from "./Sidebar.module.css";
//import "./sidebar.scss";

export default function Sidebar({ collapsed }) {
  return (
    <ProSidebar collapsed={collapsed} breakPoint="md" width={230}>
      <SidebarHeader>
        <div
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
        </div>
      </SidebarHeader>
      <SidebarContent
        style={{
          paddingTop: 10,
          lineHeight: 2.5,
          fontSize: 14,
          overflow: "hidden",
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
  );
}
