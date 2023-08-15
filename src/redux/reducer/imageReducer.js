import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const initialState = {
    images: [],
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImages: (state, action) => {
            // Check if the newItem already exists in the items array
            const exists = state.images.some(img => img.sourceURL === action.payload.sourceURL );
            if (!exists) {
                // Add the newItem to the array with a generated id if it doesn't exist
                const imageWithId = { ...action.payload, id: Date.now() }; // Adding a timestamp as the id
                state.images = [...state.images, imageWithId];
                toast.success('Image successfully added.')
              }
              else{
                toast.warn('Sorry! Image already exist. Try again.')
              }
        },
        removeImages: (state, action) => {
            if(!action.payload.id) toast.error('Something went wrong! Try again.')
            const newImages = state.images.filter(item => item.id !== action.payload.id)
            state.images = newImages
            toast.success('Image successfully removed.')
        }
    },
});

export const { setImages, removeImages } = imageSlice.actions;

export default imageSlice.reducer;