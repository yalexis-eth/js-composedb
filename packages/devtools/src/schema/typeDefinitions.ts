import { extraScalars } from './scalars.js'

const scarlarDefinitions = Object.keys(extraScalars)
  .map((name) => `scalar ${name}`)
  .join('\n')

export const typeDefinitions = `
# Added scalars

${scarlarDefinitions}

# Field validation and configuration

directive @boolean(default: Boolean) on FIELD_DEFINITION
directive @float(min: Float, max: Float, default: Float) on FIELD_DEFINITION
directive @int(min: Int, max: Int, default: Int) on FIELD_DEFINITION
directive @string(minLength: Int, maxLength: Int!, default: String) on FIELD_DEFINITION

# List validation

directive @list(minLength: Int, maxLength: Int!) on FIELD_DEFINITION

# Views

directive @documentAccount on FIELD_DEFINITION
directive @documentVersion on FIELD_DEFINITION

# Model definition

enum ModelAccountRelation {
  LIST # Account to multiple streams - default
  SINGLE # Account to single stream (IDX)
}

directive @createModel(
  accountRelation: ModelAccountRelation!
  description: String!
) on INTERFACE
directive @createModel(
  accountRelation: ModelAccountRelation!
  description: String!
) on OBJECT

directive @loadModel(id: StreamID!) on INTERFACE
directive @loadModel(id: StreamID!) on OBJECT
`
