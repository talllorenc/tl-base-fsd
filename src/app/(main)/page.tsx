import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LastNewsBanner from "@/features/news/components/LastNewsBanner";
import { getNewsQueryOptions } from "@/features/news/hooks/useGetNews";

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getNewsQueryOptions());
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <LastNewsBanner />
      </HydrationBoundary>
    </>
  );
}
