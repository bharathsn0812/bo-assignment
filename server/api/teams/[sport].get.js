import { defineEventHandler } from 'h3'
import axios from 'axios'

export default defineEventHandler(async (event) => {
  const sport = event.context.params.sport;

  try {
    const response = await axios.get(`${process.env.BESTODDS_TEST_DOMAIN}/api/technical-test-teams?sport=${sport}`, {
    })
    return response.data
  } catch (error) {
    return { error: error.message }
  }
})
