module.exports = async function (context, req) {
    const id = context.bindingData.id;
    const updates = req.body || {};

    context.res = {
        status: 200,
        body: {
            message: "Session updated",
            id: id,
            updates: updates
        }
    };
};

