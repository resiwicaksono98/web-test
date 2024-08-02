import { useFetch } from '@/hooks/useFetch'

export const createSchedule = async (formData) => {
  const { data, loading, error, fetchData } = useFetch(`event-schedules`, 'POST', formData)

  await fetchData()

  return { data, loading, error }
}

export const getJobTypes = async () => {
  const { data, loading, error, fetchData } = useFetch(
    `job-types?isActivated=true&page=1&perPage=10`,
    'GET'
  )

  await fetchData()

  return { data, loading, error }
}

export const getPrerequisites = async () => {
  const { data, loading, error, fetchData } = useFetch(`prerequisites/for-user`, 'GET')

  await fetchData()

  return { data, loading, error }
}

export const getSakuerOfficial = async () => {
  const { data, loading, error, fetchData } = useFetch(`sakuer-officials`, 'GET')

  await fetchData()

  return { data, loading, error }
}

export const detailSakuerOfficialType = async (jobTypeId, sakuerOfficalId) => {
  const { data, loading, error, fetchData } = useFetch(
    `sakuer-official-types/detail/${jobTypeId}/${sakuerOfficalId}`,
    'GET'
  )

  await fetchData()

  return { data, loading, error }
}

export const eventScheduleDetail = async (id) => {
  const { data, loading, error, fetchData } = useFetch(`event-schedules/${id}`, 'GET')

  await fetchData()

  return { data, loading, error }
}
