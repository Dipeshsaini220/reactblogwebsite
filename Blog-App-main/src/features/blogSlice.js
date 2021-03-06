import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blogId: null,
		blogTitle: null,
		blogContent: null,
		blogAuthor: null,
		blogInput: null,
	},
	reducers: {
		setBlog: (state, action) => {
			state.blogId = action.payload.blogId;
			state.blogInput = action.payload.blogInput;
			state.blogTitle = action.payload.blogTitle;
			state.blogContent = action.payload.blogContent;
			state.blogAuthor = action.payload.blogAuthor;
			state.blogTimestamp = action.payload.blogTimestamp;
		}
	}
});

export const { setBlog } = blogSlice.actions;

export const selectBlogId = (state) => state.blog.blogId;
export const selectBlogInput= (state) => state.blog.blogInput;
export const selectBlogTitle = (state) => state.blog.blogTitle;
export const selectBlogContent = (state) => state.blog.blogContent;
export const selectBlogAuthor = (state) => state.blog.blogAuthor;

export default blogSlice.reducer;
