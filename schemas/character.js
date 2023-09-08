const z = require('zod')

const characterSchema = z.object({
    id: z.number({
        invalid_type_error: 'Character Id must be a Number',
        required_error: 'Character Id is required'
    }).int(),
    name: z.string({
        invalid_type_error: 'Character Name must be a String',
        required_error: 'Character Name is required'
    }),
    level: z.number({
        invalid_type_error: 'Character Level must be a number larger than 0',
        required_error: 'Character Level is required'
    }).int().min(1),
    class: z.string({
        invalid_type_error: 'Character Class must be a String',
        required_error: 'Character Class is required'
    }),
    userId: z.number({
        invalid_type_error: 'Character User Id must be a number',
        required_error: 'Character User Id is required'
    }).int()
})

function validateCharacter(obj) {
    return characterSchema.safeParse(obj);
}

module.exports = {
    validateCharacter
}