import { stateList } from "../../components/US-Map/stateList";

export default function State({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  console.log(stateList.find((state) => state.id.toLowerCase() == id));
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="w-full max-w-screen-xl">
        {params.id}
        <br />
        Welcome to the {params.id} page!
      </section>
    </main>
  );
}
