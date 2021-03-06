import { createToken } from 'tpendency';

import type { IApiService } from './services/ApiService';

export const FactorizeInputToken = createToken<number>('FactorizeInput');
export const FactorizedNumberToken = createToken<number>('FactorizedNumber');

export const WelcomeMessageToken = createToken<string>('WelcomeMessage');

export const SlowLoadingToken = createToken<string>('SlowLoading');

export const ApiServiceToken = createToken<IApiService>('ApiService');
