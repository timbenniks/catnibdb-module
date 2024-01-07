type Props = {
  id: number,
}

export async function useCat(properties: Props) {
  const { url, key } = useRuntimeConfig().public.catnibdb

  const { data, pending, error, refresh } = await useFetch(`${url}/api/cat`, {
    params: {
      id: properties.id
    },
    headers: {
      'x-api-key': key
    }

  })

  return {
    data, pending, error, refresh
  }
}
