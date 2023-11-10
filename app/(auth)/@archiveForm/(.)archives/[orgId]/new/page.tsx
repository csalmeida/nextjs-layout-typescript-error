
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
        <>
            <p>/new @archiveForm {orgId}</p>
        </>
    )
}
