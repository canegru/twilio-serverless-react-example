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

const serverless = async (context: Context<MyContext>, event: MyEvent) => {
  return {
    status: "Hello World - 2",
    details: {
      domain: context.DOMAIN_NAME,
      path: context.PATH,
    }
  };
};

export const handler: ServerlessFunctionSignature = (
  context: Context<MyContext>,
  event: MyEvent,
  callback: ServerlessCallback
) => {
  serverless(context, event)
    .then((data) => callback(null, data))
    .catch((err) => callback(err, undefined));
};
