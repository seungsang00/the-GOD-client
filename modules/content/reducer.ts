import { createReducer } from 'typesafe-actions';
import { ContentReducer } from '@interfaces';
import { ContentAction } from './actions';
import {
  CONTENT_CREATE,
  CONTENT_CREATE_ERROR,
  CONTENT_CREATE_SUCCESS,
  CONTENT_GET,
  CONTENT_GET_ERROR,
  CONTENT_GET_SUCCESS,
  CONTENT_INIT_GET,
  CONTENT_LIST_GET,
  CONTENT_LIST_GET_ERROR,
  CONTENT_LIST_GET_SUCCESS,
  CONTENT_UPDATE,
  CONTENT_UPDATE_ERROR,
  CONTENT_UPDATE_SUCCESS,
  CONTENT_DELETE,
  CONTENT_DELETE_ERROR,
  CONTENT_DELETE_SUCCESS,
  CONTENT_FORM_ARTIST,
  CONTENT_FORM_TITLE,
  CONTENT_FORM_TAGS,
  CONTENT_FORM_DESCRIPTION,
  CONTENT_FORM_IMAGES,
  CONTENT_FORM_DATES,
  CONTENT_FORM_TIMES,
  CONTENT_FORM_LOCATION,
  CONTENT_FORM_PERKS,
  CONTENT_FORM_MOBILE,
  CONTENT_SHARED_CREATE,
  CONTENT_SHARED_CREATE_SUCCESS,
  CONTENT_SHARED_CREATE_ERROR,
  CONTENT_SHARED_GET,
  CONTENT_SHARED_GET_SUCCESS,
  CONTENT_SHARED_GET_ERROR,
  CONTENT_INIT_FORM,
} from '../actionTypes';

// default Store
const initialState: ContentReducer = {
  list: {
    data: null,
    loading: false,
    error: null,
  },
  current: {
    data: null,
    loading: false,
    error: null,
  },
  create: {
    data: null,
    loading: false,
    error: null,
  },
  update: {
    data: null,
    loading: false,
    error: null,
  },
  delete: {
    data: null,
    loading: false,
    error: null,
  },
  form: {
    id: '',
    artist: { name: '', group: '', id: '', profileImage: '' },
    title: '',
    tags: [],
    description: '',
    images: [],
    date: {
      start: undefined,
      end: undefined,
    },
    time: {
      open: '-- 시 --:-- 분 --:00',
      close: '-- 시 --:-- 분 --:00',
    },
    author: {
      id: '',
      name: '',
      profileImage: '',
    },
    address: { storeName: '', roadAddress: '', location: { lat: 0, lng: 0 } },
    mobile: '',
    perks: {
      bus: false,
      sort: false,
      baby: false,
      subway: false,
      train: false,
      parking: false,
      cat: false,
    },
  },
  path: {
    data: null,
    loading: false,
    error: null,
  },
  shared: {
    data: null,
    loading: false,
    error: null,
  },
};

const content = createReducer<ContentReducer, ContentAction>(initialState, {
  [CONTENT_INIT_GET]: (state) => ({
    ...state,
    current: {
      loading: false,
      error: null,
      data: null,
    },
  }),
  [CONTENT_GET]: (state) => ({
    ...state,
    current: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_GET_SUCCESS]: (state, action) => ({
    ...state,
    current: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_GET_ERROR]: (state, action) => ({
    ...state,
    current: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_SHARED_GET]: (state) => ({
    ...state,
    path: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_SHARED_GET_SUCCESS]: (state, action) => ({
    ...state,
    path: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_SHARED_GET_ERROR]: (state, action) => ({
    ...state,
    path: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_CREATE]: (state) => ({
    ...state,
    create: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_CREATE_SUCCESS]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_CREATE_ERROR]: (state, action) => ({
    ...state,
    create: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_SHARED_CREATE]: (state) => ({
    ...state,
    shared: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_SHARED_CREATE_SUCCESS]: (state, action) => ({
    ...state,
    shared: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_SHARED_CREATE_ERROR]: (state, action) => ({
    ...state,
    shared: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_UPDATE]: (state) => ({
    ...state,
    update: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_UPDATE_ERROR]: (state, action) => ({
    ...state,
    update: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_DELETE]: (state) => ({
    ...state,
    delete: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_DELETE_SUCCESS]: (state, action) => ({
    ...state,
    delete: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [CONTENT_DELETE_ERROR]: (state, action) => ({
    ...state,
    delete: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_LIST_GET]: (state) => ({
    ...state,
    list: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [CONTENT_LIST_GET_SUCCESS]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: null,
      data: action.payload.result,
    },
  }),
  [CONTENT_LIST_GET_ERROR]: (state, action) => ({
    ...state,
    list: {
      loading: false,
      error: action.payload.response?.data.message,
      data: null,
    },
  }),
  [CONTENT_FORM_ARTIST]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      artist: { ...state.form.artist, ...action.payload },
    },
  }),
  [CONTENT_FORM_TITLE]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      title: action.payload,
    },
  }),
  [CONTENT_FORM_TAGS]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      tags: action.payload,
    },
  }),
  [CONTENT_FORM_DESCRIPTION]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      description: action.payload,
    },
  }),
  [CONTENT_FORM_IMAGES]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      images: action.payload,
    },
  }),
  [CONTENT_FORM_DATES]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      date: action.payload,
    },
  }),
  [CONTENT_FORM_TIMES]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      time: action.payload,
    },
  }),
  [CONTENT_FORM_LOCATION]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      address: action.payload,
    },
  }),
  [CONTENT_FORM_MOBILE]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      mobile: action.payload,
    },
  }),
  [CONTENT_FORM_PERKS]: (state, action) => ({
    ...state,
    form: {
      ...state.form,
      perks: {
        ...state.form.perks,
        [action.payload]: !state.form.perks[action.payload],
      },
    },
  }),
  [CONTENT_INIT_FORM]: (state) => ({
    ...state,
    form: initialState.form,
  }),
});

export default content;
