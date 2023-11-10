export const metadata = {
  title: 'Archive',
}

export default async function Page({
    params,
}: {
    params: { archiveId: string }
}) {
    const { archiveId } = params

    return (
        <p> Archive {archiveId}</p>
    )
}
