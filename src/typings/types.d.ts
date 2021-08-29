declare global {
  interface Window {
    API: MyApi;
  }
}

export interface MyApi {
  test(...args): Promise<any>;
  crashReporter: {
    addExtraParameter(key: string, value: string);
  };
  ipcRenderer: {
    invoke(channel: string, ...args: any[]): Promise<any> | void;
    send(channel, ...args);
    on(channel, listener);
    once(channel, listener);
    removeListener(channel, listener);
  };
}
