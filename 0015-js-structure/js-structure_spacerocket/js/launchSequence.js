import { loadPayload } from "./core/load.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { countdown } from "./core/countdown.js";
// Implement the launch sequence function here and export it as the default export.
export default function launchSequence() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  liftoff();
  deployPayload();
}
