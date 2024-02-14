const { complain: schema } = require('./schemas');

module.exports = {
    new: async (content) => {
        const result = await schema.create.validateAsync(content);
        return result;
    }
}