import { WorkflowCardProps } from "../types/types";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function WorkflowCard({
  title,
  role,
  href,
  icon,
  description,
  activeRole,
}: WorkflowCardProps) {
  const isAuthorized =
    !activeRole || activeRole === role || activeRole === "Administrator";

  return (
    <div className={`workflowCard${isAuthorized ? "" : " workflowCardDisabled"}`}>
      <div>
        <div className="workflowCardTop">
          <div className="workflowCardIconTile">{icon}</div>
          {activeRole === role && (
            <span className="roleBadge">
              <CheckCircle2 className="iconSmall" /> Your Role
            </span>
          )}
        </div>
        <h3 className="workflowCardTitle">{title}</h3>
        <p className="workflowCardDescription">
          {description}
        </p>
      </div>

      <div className="workflowCardFooter">
        <Link
          href={href}
          className={`workflowCardLink${isAuthorized ? "" : " workflowCardLinkDisabled"}`}
        >
          <span>Launch Module</span>
          <ArrowRight className="iconSmall" />
        </Link>
      </div>
    </div>
  );
}