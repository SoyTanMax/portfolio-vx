import { cssBundleHref } from "@remix-run/css-bundle";
import stylesheet from "~/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export const meta = () => {
  return [
    {
      title: "Max López - UX Engineer",
      description: "Your page description",
    },
  ];
};

export default function App() {
  const links = [
    { to: "/", label: "Home" },
    { to: "https://github.com/SoyTanMax", label: "Github" },
    { to: "https://www.linkedin.com/in/max-lopez-dev/", label: "LinkedIn" },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar links={links} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
