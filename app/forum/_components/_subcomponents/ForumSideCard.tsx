import type { ReactNode } from "react";

type ForumSideCardProps = {
  title: string;
  children: ReactNode;
};

export default function ForumSideCard({ title, children }: ForumSideCardProps) {
  return (
    <div className="forum-side-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
