import { formatDistanceToNow, format } from 'date-fns';

export const dataForm = value => {
  return formatDistanceToNow(new Date(value), { addSuffix: true });
};

export const formatDate = value => {
  return format(new Date(value), 'Pp');
};
