const openSecretsAPIKey = process.env.OPENSECRETS_API_KEY;

export default async function getLegisData(state) {
  const res = await fetch(
    `https://www.opensecrets.org/api/?method=getLegislators&id=${state}&apikey=${openSecretsAPIKey}&output=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getCandData(id) {
  const res = await fetch(
    `https://www.opensecrets.org/api/?method=candSummary&cid=${id}&cycle=2024&apikey=${openSecretsAPIKey}&output=json`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
