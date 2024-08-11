export interface Book {
    title: string;
    author: string;
    pages: number;
}

export function getBookInfo(book: Book): string {
    return `"${book.title}" by ${book.author} (${book.pages} pages)`;
}