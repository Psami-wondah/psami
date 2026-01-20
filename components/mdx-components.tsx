// @ts-ignore
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  a: ({ children, href }) => (
    <Link
      href={href || "#"}
      className="text-primary hover:underline underline-offset-4"
    >
      {children}
    </Link>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto text-sm mb-6">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary pl-4 text-slate-600 dark:text-slate-300 italic mb-6">
      {children}
    </blockquote>
  ),
};

export default mdxComponents;
