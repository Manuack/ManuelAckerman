import { Texts } from '../shared/interfaces/texts.interface';

export type LandingViewState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; texts: Texts };
