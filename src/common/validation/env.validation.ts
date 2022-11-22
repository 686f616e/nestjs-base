import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export enum Environment {
  Development = 'dev',
  Production = 'prod',
  Staging = 'stag',
}

class EnvironmentVariables {
  NODE_ENV: Environment = Environment.Development;

  PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) throw Error(errors.toString());

  return validatedConfig;
}
