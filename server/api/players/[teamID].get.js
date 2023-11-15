import { defineEventHandler } from "h3";
import axios from "axios";

export default defineEventHandler(async (event) => {
  const teamID = event.context.params.teamID;

  try {
    const response = await axios.get(
      `${process.env.BESTODDS_TEST_DOMAIN}/api/technical-test-team-players?teamID=${teamID}`,
      {},
    );
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});
