import {
  Meta as SBMeta,
  StoryObj as SBStoryObj,
  DecoratorFn as SBDecoratorFn,
} from '@storybook/react';
import { RestHandler } from 'msw';
import { QueryClient } from '@tanstack/react-query';

export * from '@storybook/react';

export type RootArgs<Args = Record<string, unknown>> = {
  queryClient?: QueryClient;
} & Args;

type Params<Args> = SBMeta['parameters'] & {
  msw: (args: Args) => RestHandler[];
};

export interface Meta<Args> extends SBMeta<RootArgs<Args>> {
  parameters: Params<Args>;
}

export interface StoryObj<Args> extends SBStoryObj<RootArgs<Args>> {}

type DecoratorParams = Parameters<SBDecoratorFn>;
export type DecoratorFn<Args> = (
  Story: DecoratorParams[0],
  options: DecoratorParams[1] & { parameters: Params<Args> }
) => ReturnType<SBDecoratorFn>;
