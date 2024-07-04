import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nyu9qzne',
    dataset: 'production'
  },
  project: {
    basePath: '/blog'
  }
})
