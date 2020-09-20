import { useLocation } from 'react-router-dom'
const useQueryParams = () => {
  const queryParams = {}
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  for (let value of query.keys()) {
    queryParams[value] = query.get(value)
  }
  return { queryParams }
}

export default useQueryParams
