export const errorHandler = (err, req, res, next) => {
    res.status(500).send("There is an error");
}