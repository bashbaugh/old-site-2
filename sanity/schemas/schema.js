import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { singletonHome } from './singletonHome'
import { singletonMore } from './singletonMore'
import { project } from './projects'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonMore,
    project
  ]),
})
