type Props = {
  per_page: number,
  order_by: string,
  order_direction: string
}

export async function useCats(properties: Props) {
  const { url, key } = useRuntimeConfig().public.catnibdb

  const { data, pending, error, refresh } = await useFetch(`${url}/api/cats`, {
    params: {
      per_page: properties.per_page || 20,
      order_by: properties.order_by || 'id',
      order_direction: properties.order_direction || 'asc'
    },
    headers: {
      'x-api-key': key
    }
  })

  return {
    data, pending, error, refresh
  }
}
