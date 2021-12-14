import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

export default function Sidebar({ collapsed }) {
  return (
    <ProSidebar collapsed={collapsed} breakPoint="md">
      <SidebarHeader>
        <div
          style={{
            paddingTop: 24,
            paddingBottom: 24,
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 18,
            letterSpacing: 0.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          My Research Projects
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
          <MenuItem style={{ lineHeight: 2 }}>1. Oxysilylation</MenuItem>
          <SubMenu style={{ lineHeight: 2 }} title="2. Novel SSEs">
            <MenuItem>
              Li<sub>x</sub>PON and Li<sub>x</sub>SiPON
            </MenuItem>
            <MenuItem>
              Li<sub>x</sub>SiON
            </MenuItem>
            <MenuItem>
              Li<sub>x</sub>SiO
            </MenuItem>
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
    </ProSidebar>
  );
}
