import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {

    if (error.type === "conflict") {
        console.log('Erro no middleware errorHandler:', error);
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    
    if (error.type === "invalid") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
    console.log(error)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}