import { DEFAULT } from "./actionTypes";

const reducerCreator = (objectReducer, initState) => (state, action) => {
    const handler = objectReducer[action.type] || objectReducer[DEFAULT];
    return handler((state = initState), action);
};

export { reducerCreator };
