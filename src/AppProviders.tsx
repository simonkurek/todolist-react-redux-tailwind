import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
