import { Agenda } from "@hokify/agenda";

const connectionsString = "mongodb://localhost:27017/tk-heart";

const agenda = new Agenda(
  {
    db: { address: connectionsString, collection: "jobs" },
  },
  (error) => {
    if (error) {
      console.error("[AGENDA] Error connecting to database", error);
    }
  }
);

export { agenda };
