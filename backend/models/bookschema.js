const bookSchema = mongoose.Schema(
    {
     title: {
        type: String,
        required: true,
     },
     author: {
        type: String,
        required: true,
     },
     publishYear: {
        type: Number,
        required: true,
     },
     category: { // Add this field
        type: String,
        required: true,
        enum: ['Historical', 'Fictional'], // Optional: Restrict to predefined categories
     },
},
{
    timestamps: true,
});

export const Book = mongoose.model('Book', bookSchema);
