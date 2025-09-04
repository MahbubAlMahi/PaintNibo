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

export const getCart = createAsyncThunk('cart/get', () => api('/cart'))
export const addToCart = createAsyncThunk('cart/add', (payload) => api('/cart', { method: 'POST', body: payload }))
export const updateCartItem = createAsyncThunk('cart/update', (payload) => api('/cart', { method: 'PUT', body: payload }))
export const removeFromCart = createAsyncThunk('cart/remove', (productId) => api(`/cart/${productId}`, { method: 'DELETE' }))

const slice = createSlice({
  name: 'cart',
  initialState: { items: [], status: 'idle', error: null },
  reducers: { clearCartLocal: (state) => { state.items = [] } },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => { state.items = action.payload })
      .addCase(addToCart.fulfilled, (state, action) => { state.items = action.payload })
      .addCase(updateCartItem.fulfilled, (state, action) => { state.items = action.payload })
      .addCase(removeFromCart.fulfilled, (state, action) => { state.items = action.payload })
      .addMatcher(a => a.type.startsWith('cart/') && a.type.endsWith('/pending'), (state) => { state.status = 'loading'; state.error = null })
      .addMatcher(a => a.type.startsWith('cart/') && a.type.endsWith('/fulfilled'), (state) => { state.status = 'succeeded' })
      .addMatcher(a => a.type.startsWith('cart/') && a.type.endsWith('/rejected'), (state, action) => { state.status = 'failed'; state.error = action.error.message })
  }
})

export const { clearCartLocal } = slice.actions
export default slice.reducer
