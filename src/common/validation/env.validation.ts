import { DefaultValue, Environment } from '@common/constants/app-default-configs';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

class EnvironmentVariables {
  NODE_ENV: Environment = DefaultValue.NODE_ENV;

  PORT: number = DefaultValue.PORT;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) throw Error(errors.toString());

  return validatedConfig;
}
