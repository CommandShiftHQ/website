import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import Footer from "@/components/footer/Footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: any;
  };
}

export default async function Page(props: PageProps) {
  await import('isolated-vm');
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      cacheSeconds: 20,
      staleCacheSeconds: 0
    })
    .toPromise();

  return (
    <div className="-mt-[56px]">
      <RenderBuilderContent content={content} model={builderModelName} />
      <Footer></Footer>
    </div>
  );
}
