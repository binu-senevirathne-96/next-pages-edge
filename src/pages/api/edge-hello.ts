export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  return new Response(
    JSON.stringify({
      message: 'Hello from the API!',
      runtime: 'Edge Runtime',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
      },
    }
  );
}
