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

  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="w-full max-w-screen-xl">
        {params.id}
        <br />
        Welcome to the {params.id} page!
        <ul>
          {legislatorsList.map((legislator: any) => {
            return (
              <li key={legislator["@attributes"].cid}>
                <span>{legislator["@attributes"].firstlast}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
