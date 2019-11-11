import CommentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "New Comment"
    };

    const newState = CommentsReducer([], action);

    expect(newState).toEqual(["New Comment"]);
});
