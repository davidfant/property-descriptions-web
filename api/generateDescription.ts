import getConfig from "next/config";

export async function generateDescription(
  tags: Record<string, string[]>,
  address: string,
  numRooms: string | undefined,
  numBathrooms: string | undefined
): Promise<string> {
  const res = await fetch(getConfig().publicRuntimeConfig.API_URL, {
    method: "POST",
    body: JSON.stringify({ tags, address, numRooms, numBathrooms }),
    headers: { "Content-Type": "application/json" },
  });

  const json = await res.json();
  return json.data;
}
