import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for write operations and real-time data
  token: process.env.EDITOR_TOKEN || process.env.SANITY_API_ADMIN_TOKEN,
})

if (!process.env.EDITOR_TOKEN && !process.env.SANITY_API_ADMIN_TOKEN) {
  console.error('Warning: Neither EDITOR_TOKEN nor SANITY_API_ADMIN_TOKEN is set. Write operations will fail.')
}
