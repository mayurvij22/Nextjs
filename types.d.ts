import { Connection } from "mongoose";

declare global {
  var mongoose: {
    conn: typeof Connection | null;
    promise: Promise<typeof Connection> | null;
  };
}

export {};
