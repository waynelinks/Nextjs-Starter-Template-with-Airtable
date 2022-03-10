import AirTable from 'airtable'

import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '@/config'

const base = new AirTable({
  apiKey: AIRTABLE_API_KEY,
}).base(AIRTABLE_BASE_ID)

// TODO: Change videoTable name to something more descriptive
// TODO: Change videoTable fields to something more descriptive
export const videoTable = base('videos')
