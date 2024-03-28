import { GetStarted, type GetStartedProps } from './GetStarted';
import { UnlockStep, type UnlockStepProps } from './UnlockStep';

export const ImportFlowViews = {
	GetStarted,
	UnlockStep,
};

export namespace ImportFlowViewsInterfaces {
	export type GetStartedViewProps = GetStartedProps;
	export type UnlockStepViewProps = UnlockStepProps;
}
