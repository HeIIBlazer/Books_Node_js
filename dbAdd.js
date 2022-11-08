const data= require('./jsonParse/toParse.json'); 
let Book = require('./models/books.js');
let Category = require('./models/category.js');
let Author = require('./models/author.js');
let BooksCategories = require('./models/bookscategories');
let AuthorsBooks = require('./models/authorsbooks');
async function readBooks(data) {
    for (item of data) {
        pdate = item["publishedDate"] != undefined ? item["publishedDate"]["$date"] : ''
        sDesc = item["shortDescription"] != undefined ? item["shortDescription"] : ''
        lDesc = item["longDescription"] != undefined ? item["longDescription"] : ''
        book = await Book.create({
            title: item["title"], isbn: item["isbn"],
            pageCount: item['pageCount'], thumbnailUrl: item["thumbnailUrl"],
            status: item["status"], publishedDate: pdate,
            shortDescription: sDesc, longDescription: lDesc
        })
        bookID = book.id
        categories = item['categories']
        for (let i = 0; i < categories.length; i++) {
            const title = categories[i].charAt(0).toUpperCase() + categories[i].slice(1)
            let category = await Category.findOne({
                where: { categoryName: title },
                attributes: ['id'],
                raw: true
                
            })
            if (category == null){
                await Category.findOrCreate({
                    where: {categoryName: title },
                    defaults: {categoryName: title}
                })
                category = await Category.findOne({
                    where: {categoryName: title },
                    attributes: ['id'],
                    raw: true
                    
                })
            }
            await BooksCategories.findOrCreate({
                where: {bookId: book.id, categoryId: category.id},
                defaults: { bookId: book.id, categoryId: category.id}})
        }
        authors = item['authors']
        for (let i = 0; i < authors.length; i++) {
            const name = authors[i];
            let author = await Author.findOne({
                where: { fullname: name },
                attributes: ['id'],
                raw: true
            })
            if (author == null){
                await Author.findOrCreate({
                    where: { fullname: name },
                    defaults: {fullname: name}
                })
                author = await Author.findOne({
                    where: { fullname: name },
                    attributes: ['id'],
                    raw: true
                })
            }
            await AuthorsBooks.findOrCreate({
                where: {bookId: book.id, authorId: author.id},
                defaults: {bookId: book.id, authorId: author.id}})
        }
    }
}
readBooks(data)