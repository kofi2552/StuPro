import { Outlet, Link } from "@remix-run/react";
import "../Styles.css";
import Navbar from "./dashboard/Navbar";
import Header from "~/components/header/Header";

export default function Layout() {
  return (
    <div className="layout">
      <div className="stable-header">
        <Header />
        <Navbar />
      </div>
      <main className="db-container">
        <Outlet />
      </main>
    </div>
  );
}
