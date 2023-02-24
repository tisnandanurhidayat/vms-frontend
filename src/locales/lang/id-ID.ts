import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/id_ID';

const modules = import.meta.globEager('./id-ID/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'id-ID'),
    antdLocale,
  },
};
