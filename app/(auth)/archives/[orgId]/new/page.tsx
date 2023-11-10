export const metadata = {
  title: 'New Archive',
}

export default async function Page({
  params,
}: {
  params: { orgId: string; }
}) {
  const { orgId } = params 
  
  return (
      <p>/new archive in /archives/[orgId]/new/page.tsx for {orgId}</p>
  )
}
