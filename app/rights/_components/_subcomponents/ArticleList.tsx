import type { ReactNode } from "react";

type ArticleListProps = {
  items: ReactNode[];
};

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
