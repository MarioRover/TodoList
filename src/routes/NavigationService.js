import * as React from "react";

export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function reset(name, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name }],
    }),
  );
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  reset,
  goBack,
  push,
};
