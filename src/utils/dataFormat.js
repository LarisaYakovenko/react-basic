import { formatDistanceToNow } from 'date-fns';

export const dataForm = (value) => {
  return formatDistanceToNow(new Date(value), { addSuffix: true })

}
