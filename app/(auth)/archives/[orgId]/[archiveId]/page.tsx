

export default async function Page({
    params,
}: {
    params: { orgId: string, archiveId: string }
}) {
    const { orgId, archiveId } = params

    return (
      <>
        <p>/archives/[orgId]/[archiveId]/page.tsx</p>
        <p>orgId: {orgId} and archiveId: {archiveId}</p>
      </>
    )
}
