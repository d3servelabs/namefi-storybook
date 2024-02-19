import React, {memo} from 'react';
import {FlowStep} from '@components/FlowStep';

export type StepDiagramProps = {stepCount:number, currentStep:number}

export const StepDiagram = memo<StepDiagramProps>(
    ({stepCount, currentStep}) => {
        return (
            <div
                className="relative h-[28px] w-[234px] flex justify-between items-center
            before:absolute
            before:w-[100%]
            before:h-[1.5px]
            before:bg-[#c6eedb]
            before:top-[14px]
            before:opacity-10
            before:-z-1">
                {Array(stepCount) 
                    .fill(0)
                    .map((_, index) => {
                        return (
                            <>
                                <FlowStep isFocused={currentStep === index + 1} text={index + 1}/>
                            </>
                        );
                    })}
            </div>
        );
    },
    (prevProps, nextProps) =>
        prevProps.currentStep === nextProps.currentStep &&
        prevProps.stepCount === nextProps.stepCount,
);