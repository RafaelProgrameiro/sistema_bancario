const bodyReqValidation = (joiSchema) => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        next();
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
}

export default bodyReqValidation;