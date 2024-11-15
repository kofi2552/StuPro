import * as Ariakit from "@ariakit/react";
import "./style.css";

export default function DropMenu() {
  return (
    <div className="dropmenu">
      <Ariakit.MenuProvider>
        <Ariakit.Menu gutter={8} className="menu">
          <Ariakit.MenuItem className="menu-item" onClick={() => alert("Edit")}>
            Edit
          </Ariakit.MenuItem>
          <Ariakit.MenuItem className="menu-item">Share</Ariakit.MenuItem>
          <Ariakit.MenuItem className="menu-item" disabled>
            Delete
          </Ariakit.MenuItem>
          <Ariakit.MenuSeparator className="separator" />
          <Ariakit.MenuItem className="menu-item">Report</Ariakit.MenuItem>
        </Ariakit.Menu>
      </Ariakit.MenuProvider>
    </div>
  );
}
