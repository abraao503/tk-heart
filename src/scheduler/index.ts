import { resetUserReactionsJob } from "./jobs/resetUserReactions";
import { agenda } from "./agenda";

agenda.define("resetUserReactions", resetUserReactionsJob);
agenda.every("0 0 * * *", "resetUserReactions", { timezone: "America/Manaus" });

agenda.on("ready", () => {
  agenda.start();
  console.log("[AGENDA] Agenda started");
});
