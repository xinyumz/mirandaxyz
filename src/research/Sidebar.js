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
import styles from "./Sidebar.module.css";

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
            <Link to="/research/polymer_syntheses" />
          </MenuItem>
          <MenuItem style={{ lineHeight: 2 }}>
            1. Oxysilylation{" "}
            <Link to="/research/polymer_syntheses/oxysilylation"></Link>
          </MenuItem>
          <SubMenu
            style={{ lineHeight: 2, fontStyle: "italic" }}
            title="2. Novel SSEs *"
          >
            <MenuItem>
              Polymer Precursors{" "}
              <Link to="/research/polymer_syntheses/novel_sses"></Link>
            </MenuItem>
            <MenuItem>
              Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
            </MenuItem>
            <MenuItem>
              Li<sub>x</sub>SiON
            </MenuItem>
            <MenuItem>Next Steps</MenuItem>
          </SubMenu>
          <MenuItem style={{ lineHeight: 2 }}>3. M-HMDS</MenuItem>
          <MenuItem style={{ fontSize: 16, fontWeight: "bold" }}>
            ZTA Ceramics
          </MenuItem>
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
