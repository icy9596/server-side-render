import axios from 'axios';

import { sourceServerUrl } from '@/config';

export default axios.create({
    baseURL: `${ sourceServerUrl }/ssr`,
})