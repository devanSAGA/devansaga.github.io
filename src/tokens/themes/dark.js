import { aliases, globals, pageSpecificTokens } from "../tokens";

const dark = {
  ...globals.typography,
  ...globals.border,
  ...aliases.dark,
  ...pageSpecificTokens.dark.dashboard
};

export default dark;