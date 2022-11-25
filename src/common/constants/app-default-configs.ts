export enum Environment {
  Development = 'dev',
  Production = 'prod',
  Staging = 'stag',
}

export const DefaultValue = {
  PORT: 3000,
  NODE_ENV: Environment.Development,
  PAGE_SIZE_DEFAULT: 20,
};
