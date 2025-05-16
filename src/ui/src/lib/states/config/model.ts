export interface Config {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Configuration {
  loaded: boolean;

  configMap: { [config: string]: Config };
}
