"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookInfo = getBookInfo;
function getBookInfo(book) {
    return "\"".concat(book.title, "\" by ").concat(book.author, " (").concat(book.pages, " pages)");
}
