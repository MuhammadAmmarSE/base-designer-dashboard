import React from 'react';
import { useTheme } from '@material-ui/core/styles';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const theme = useTheme();

    return <Component theme={theme} {...props} />;
  };
};