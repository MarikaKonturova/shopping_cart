import {rootReducer, store} from "./store";
export type AppDispatchType = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof rootReducer>
