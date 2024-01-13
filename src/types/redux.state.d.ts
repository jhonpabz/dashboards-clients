declare namespace ReduxSpace {
  type ReduxAction<Actions> = {
    type: keyof Actions;
    payload: any;
  };

  namespace Dashboard {
    type State = {
      client: string;
    };
  }
}
