import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, AppStoreType} from "../store/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppStoreType;
    dispatch: AppDispatch;
    rejectValue: any;
}>();
