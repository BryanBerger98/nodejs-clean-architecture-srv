import { DevEnrionment } from './env.dev';
import { ProdEnvironment } from './env.prod';

export const environment = process.env.NODE_ENV === 'production' ? ProdEnvironment : DevEnrionment;

