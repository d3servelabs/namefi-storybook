import { GetStarted, type GetStartedProps } from './GetStarted';
import { UnlockStep, type UnlockStepProps } from './UnlockStep';
import { AuthCodeStep, type AuthCodeStepProps } from './AuthCodeStep';
import { WaitRegistrarStep, type WaitRegistrarStepProps } from './WaitRegistrarStep';
import { MintStep, type MintStepProps } from './MintStep';
import { CompletedStep, type CompletedStepProps } from './CompletedStep';

export const ImportFlowViews = {
	GetStarted,
	UnlockStep,
	AuthCodeStep,
	WaitRegistrarStep,
	MintStep,
	CompletedStep,
};

export namespace ImportFlowViewsInterfaces {
	export type GetStartedViewProps = GetStartedProps;
	export type UnlockStepViewProps = UnlockStepProps;
	export type AuthCodeStepViewProps = AuthCodeStepProps;
	export type WaitRegistrarStepViewProps = WaitRegistrarStepProps;
	export type MintStepViewProps = MintStepProps;
	export type CompletedStepViewProps = CompletedStepProps;
}
