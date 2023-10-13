const { user: schema } = require('./schemas');

module.exports = {
    newUser: async (content) => {
        const result = await schema.create.validateAsync(content)
        return result;
    }
}