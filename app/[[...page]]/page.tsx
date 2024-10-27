import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import Footer from "@/components/footer/Footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type Params = Promise<{ page: string[] }>

export default async function Page(props: { params: Params }) {
  await import('isolated-vm');
  const builderModelName = "page";
  const params = await props.params;

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
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
