import { parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const LONG_LOCALIZED_DATE = 'P';

const parseDate = (dateStr) => {
  return parse(dateStr, LONG_LOCALIZED_DATE, new Date(), {
    locale: ptBR,
  });
};

export { parseDate };
