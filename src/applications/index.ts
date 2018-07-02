import * as development from './development'
import * as social from './social'
import * as utilities from './utilities'
import { Applications } from '../types'

export const applications: Applications[] = [
  ...development.applications,
  ...social.applications,
  ...utilities.applications
]
