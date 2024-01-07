export async function usePages() {
  const { url, key } = useRuntimeConfig().public.catnibdb

  const { data, pending, error, refresh } = await useFetch(`${url}/api/pages`, {
    headers: {
      'x-api-key': key
    }

  })

  return {
    data, pending, error, refresh
  }
}
