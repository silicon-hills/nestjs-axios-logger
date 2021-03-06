/**
 * File: /src/types.ts
 * Project: nestjs-axios-logger
 * File Created: 17-07-2021 22:36:56
 * Author: Silicon Hills LLC <info@siliconhills.dev>
 * -----
 * Last Modified: 18-07-2021 00:07:17
 * Modified By: Silicon Hills LLC <info@siliconhills.dev>
 * -----
 * Silicon Hills LLC (c) Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AxiosError } from 'axios';
import { LogLevel } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';

export interface AxiosLoggerOptions {
  data?: boolean;
  error?: (err: AxiosError<any> | string) => AxiosError<any> | string;
  errorLogLevel?: LogLevel;
  headers?: boolean;
  method?: boolean;
  request?: (message: string) => string;
  requestLogLevel?: LogLevel;
  response?: (message: string) => string;
  responseLogLevel?: LogLevel;
  status?: boolean;
  statusText?: boolean;
  url?: boolean;
}

export interface AxiosLoggerAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<AxiosLoggerOptions> | AxiosLoggerOptions;
}

export const AXIOS_LOGGER_OPTIONS = 'AXIOS_LOGGER_OPTIONS';
