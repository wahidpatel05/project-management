import {ApiResponse} from "../utils/api-response"

const healthCheck = (req, res) => {
    try {
        res.status(200).json(
            new ApiResponse(200, {message: "Server is up and running"})
        )
    } catch (error) {}
}
export {healthCheck}