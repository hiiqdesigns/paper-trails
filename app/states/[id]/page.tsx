const openSecretsAPIKey = process.env.OPENSECRETS_API_KEY;

async function getData(state: string) {
  const res = await fetch(
    `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${openSecretsAPIKey}&output=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function State({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const data = await getData(id);
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
