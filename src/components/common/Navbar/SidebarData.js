import React from "react";
import overview from "../../../icons/Sidebar/ooverview.svg";
import agents from "../../../icons/Sidebar/agents.svg";
import settings from "../../../icons/Sidebar/settings.svg";
import tickets from "../../../icons/Sidebar/tickets.svg";
import ideas from "../../../icons/Sidebar/ideas.svg";
import contacts from "../../../icons/Sidebar/contacts.svg";
import subscription from "../../../icons/Sidebar/subscription.svg";
import articles from "../../../icons/Sidebar/articles.svg";
import horizontal from "../../../icons/Sidebar/horizontal.svg";
import logo from "../../../icons/logo.svg";

export const Logo = () => {
  return <img src={logo} alt="Dashboard kit logo" />;
};

export const SidebarData = [
  {
    title: "Overview",
    path: "/",
    icon: <img src={overview} alt="Overview" />,
    cName: "nav-text",
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: <img src={tickets} alt="tickets" />,

    cName: "nav-text",
  },
  {
    title: "Ideas",
    path: "/ideas",
    icon: <img src={ideas} alt="ideas" />,

    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <img src={contacts} alt="contacts" />,

    cName: "nav-text",
  },
  {
    title: "Agents",
    path: "/agents",
    icon: <img src={agents} alt="agents" />,
    cName: "nav-text",
  },
  {
    title: "Articles",
    path: "/articles",
    icon: <img src={articles} alt="articles" />,

    cName: "nav-text",
  },

  {
    title: "",
    path: "/",
    icon: <img src={horizontal} alt="divider for separating links" />,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <img src={settings} alt="settings" />,
    cName: "nav-text",
  },
  {
    title: "Subscription",
    path: "/subscription",
    icon: <img src={subscription} alt="Subscription" />,
    cName: "nav-text",
  },
];
