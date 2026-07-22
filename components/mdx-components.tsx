import type { MDXComponents } from "mdx/types";
import { Children, isValidElement, type ReactNode } from "react";
import { slugifyHeading } from "@/lib/posts";

const textFromChildren = (children: ReactNode): string =>
  Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return textFromChildren(child.props.children);
      return "";
    })
    .join("");

const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1>{children}</h1>,
  h2: ({ children }) => <h2 id={slugifyHeading(textFromChildren(children))}>{children}</h2>,
  h3: ({ children }) => <h3 id={slugifyHeading(textFromChildren(children))}>{children}</h3>,
  a: ({ children, href }) => {
    const external = href?.startsWith("http");
    return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}</a>;
  },
};

export default mdxComponents;
