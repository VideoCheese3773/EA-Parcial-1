const z = require('zod')

const itemSchema = z.object({
    id: z.number({
        invalid_type_error: 'Item Id must be a Number',
        required_error: 'Item Id is required'
    }).int(),
    name: z.string({
        invalid_type_error: 'Item Name must be a String',
        required_error: 'Item Name is required'
    }),
    type: z.string({
        invalid_type_error: 'Item Type must be a String',
        required_error: 'Item Type is required'
    }),
    mode: z.string({
        invalid_type_error: 'Item Mode must be a String',
        required_error: 'Item Mode is required'
    }),
    characterId: z.number({
        invalid_type_error: 'Item Character Id must be a number',
        required_error: 'Item Character Id is required'
    }).int()
})

function validateItem(obj) {
    return itemSchema.safeParse(obj);
}

module.exports = {
    validateItem
}