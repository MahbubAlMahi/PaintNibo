import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const api = async (path, { method='GET', body } = {}) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error((await res.json()).message || 'Request failed')
  return res.json()
}

export const registerUser = createAsyncThunk('auth/register', (data) => api('/auth/register', { method: 'POST', body: data }))
export const loginUser = createAsyncThunk('auth/login', (data) => api('/auth/login', { method: 'POST', body: data }))
export const fetchMe = createAsyncThunk('auth/me', () => api('/auth/me'))
export const logoutUser = createAsyncThunk('auth/logout', () => api('/auth/logout', { method: 'POST' }))

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => { state.user = action.payload; state.error = null })
      .addCase(loginUser.fulfilled, (state, action) => { state.user = action.payload; state.error = null })
      .addCase(fetchMe.fulfilled, (state, action) => { state.user = { id: action.payload.id, name: action.payload.name, email: action.payload.email }; })
      .addCase(logoutUser.fulfilled, (state) => { state.user = null })
      .addMatcher(a => a.type.endsWith('/pending'), (state) => { state.status = 'loading'; state.error = null })
      .addMatcher(a => a.type.endsWith('/fulfilled'), (state) => { state.status = 'succeeded' })
      .addMatcher(a => a.type.endsWith('/rejected'), (state, action) => { state.status = 'failed'; state.error = action.error.message })
  }
})

export default slice.reducer
