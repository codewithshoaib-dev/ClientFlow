
export default async function PortalPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params; // Next 15: params is now a Promise, easy to miss
  return <p>Portal for token: {token}</p>;
}
