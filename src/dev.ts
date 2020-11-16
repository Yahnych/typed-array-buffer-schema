import { BufferSchema, Model, uint8, uint32 } from './index'

const movementSchema = BufferSchema.schema('movement', {
  sequenceNumber: uint32,
  horizontal: uint8,
  vertical: uint8
})
const movementModel = new Model(movementSchema)

const example = {
  horizontal: 4,
  vertical: 4,
  sequenceNumber: 2
}

const serialized = movementModel.toBuffer(example)
const deserialized = movementModel.fromBuffer(serialized)

console.log('Deserialized:', deserialized)
// Expected: {sequenceNumber: 2, horizontal: 4, vertical: 4}
// But got: {sequenceNumber: 67371008, horizontal: 0, vertical: 2}
