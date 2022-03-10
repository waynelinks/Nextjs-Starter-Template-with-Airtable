declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    AIRTABLE_API_KEY: string
    AIRTABLE_BASE_ID: string
  }
}
