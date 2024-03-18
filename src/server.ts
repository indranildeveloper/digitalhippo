import express from "express";
import { getPayloadClient } from "./getPayload";
import { nextApp, nextHandler } from "./nextUtils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
      },
    },
  });

  app.use(async (req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("NextJS Started");
    app.listen(PORT, async () => {
      payload.logger.info(
        `NextJS app URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`,
      );
    });
  });
};

start();
