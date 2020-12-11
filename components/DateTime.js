import { parseISO, format } from 'date-fns'

const DateTime = function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default DateTime;