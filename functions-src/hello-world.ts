// Imports global types
import "@twilio-labs/serverless-runtime-types";
// Fetches specific types
import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from "@twilio-labs/serverless-runtime-types/types";

type MyEvent = {
  Body?: string;
};

type MyContext = {
  GREETING?: string;
};

const serverless = async () => {
  const message = {
    status: "Hello World",
  };
  return message;
};

export const handler: ServerlessFunctionSignature = (
  context: Context<MyContext>,
  event: MyEvent,
  callback: ServerlessCallback
) => {
  serverless()
    .then((data) => callback(null, data))
    .catch((err) => callback(err, undefined));
};
