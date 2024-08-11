"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 创建 Book 对象
var book1 = {
    title: 'Sherlock Holmes',
    author: 'Conan',
    pages: 99996
};
var book2 = {
    title: 'Harry Potter',
    author: 'J K Rowling',
    pages: 9996
};
// 在控制台输出这些信息
console.log("Book 1:\n title:%s\n author:%s\n pages:%d\n", book1.title, book1.author, book1.pages);
console.log("Book 2:\n title:%s\n author:%s\n pages:%d\n", book2.title, book2.author, book2.pages);
// 计算并输出这两本书的平均页数
var average_pages = (book1.pages + book2.pages) / 2.0;
console.log("Average number of pages is %s", average_pages.toFixed(2));
