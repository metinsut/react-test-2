import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";
import Axios from "axios";

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const fetchComments = () => {
    const response = Axios.get("http://jsonplaceholder.typicode.com/comments");
    return {
        type: FETCH_COMMENT,
        payload: response
    };
};
