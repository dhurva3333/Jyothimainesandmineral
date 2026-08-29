import { redirect } from 'next/navigation'

export default async function ApplicationSizesRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  redirect(`/sizes?application=${encodeURIComponent(id)}`)
}
