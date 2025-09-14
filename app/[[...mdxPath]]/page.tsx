import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import type { $NextraMetadata } from "nextra";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: {
    params: Promise<any>;
}): Promise<$NextraMetadata> {
    const params = await props.params;
    const { metadata } = await importPage(params.mdxPath);
    return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: { params: Promise<any> }) {
    const params = await props.params;
    const result = await importPage(params.mdxPath);
    const { default: MDXContent, toc, metadata, sourceCode } = result;
    return (
        <Wrapper sourceCode={sourceCode} toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    );
}
