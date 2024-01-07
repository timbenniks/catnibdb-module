type Props = {
  id?: number,
  slug: string
}

export async function usePage(properties: Props) {
  const { url, key } = useRuntimeConfig().public.catnibdb

  const { data, pending, error, refresh } = await useFetch(`${url}/api/page`, {
    params: properties,
    headers: {
      'x-api-key': key
    }

  })

  return {
    data, pending, error, refresh
  }
}
