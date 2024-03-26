import CandidateTable from "@/app/components/ui/tables/CandidateTable";
import getLegisData from "@/utils/getOpenSecretsData.js";
import { stateList } from "@/app/components/US-Map/stateList";

export default async function State({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const data = await getLegisData(id);
  const legislatorsList = data.response.legislator;
  const currentState = stateList.find((state) => state.id.toLowerCase() == id);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="container px-8 py-6 md:py-12">
        <CandidateTable
          stateName={currentState?.name}
          stateList={legislatorsList}
        />
      </section>
    </main>
  );
}
