import React from "react";
import { FlowbiteThemeProvider } from 'themes';

export const withFlowbiteTheme = (Story: any, context: any) => {

  return (
    <FlowbiteThemeProvider>
      <Story />
    </FlowbiteThemeProvider>
  );
}

export default withFlowbiteTheme;