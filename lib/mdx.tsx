import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components";

type MdxRendererProps = {
  source: string;
};

const MdxRenderer = ({ source }: MdxRendererProps) => {
  return <MDXRemote source={source} components={mdxComponents} />;
};

export default MdxRenderer;
