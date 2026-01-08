module.exports = async function (context, req) {
    const session = req.body;

    if (!session || !session.instrument || !session.duration) {
        context.res = {
            status: 400,
            body: { message: "Missing required fields" }
        };
        return;
    }

    context.res = {
        status: 201,
        body: {
            message: "Practice session created",
            session: session
        }
    };
};
