import type { ReactNode } from "react";

type ArticleSectionProps = {
  title: string;
  children: ReactNode;
};

export default function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
