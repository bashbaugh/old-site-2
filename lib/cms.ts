import axios from 'axios'

export const cmsApi = axios.create({
  baseURL: process.env.CMS_API_URL
})

cmsApi.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.CMS_API_TOKEN
