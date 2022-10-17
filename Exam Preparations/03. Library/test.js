let { expect } = require('chai')
let library = require('./library.js')

describe("library", () => {
    describe("calcPriceOfBook", () => {
        it('happy path', () => {
            expect(library.calcPriceOfBook('Book', 2000)).to.equal(`Price of Book is 20.00`)
            expect(library.calcPriceOfBook('Book', 1981)).to.equal(`Price of Book is 20.00`)
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`)
            expect(library.calcPriceOfBook('Book', 1979)).to.equal(`Price of Book is 10.00`)

        })
        it('invalid path', () => {
            expect(() => library.calcPriceOfBook('1', '1').to.throw(`Invalid input`))
            expect(() => library.calcPriceOfBook(1, '1').to.throw(`Invalid input`))
            expect(() => library.calcPriceOfBook(1, 1).to.throw(`Invalid input`))
            expect(() => library.calcPriceOfBook([], 1).to.throw(`Invalid input`))
            expect(() => library.calcPriceOfBook(1, []).to.throw(`Invalid input`))
        })
    })
    describe("findBook", () => {
        it('happy path', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal(`We found the book you want.`)
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style')).to.equal(`We found the book you want.`)
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal(`We found the book you want.`)

        })
        it('invalid path', () => {
            expect(() => library.findBook([], 'Troy').to.throw(`No books currently available`))
            expect(() => library.findBook([], 'Hey').to.throw(`No books currently available`))
            expect(() => library.findBook(["Troy", "Life Style", "Torronto"], 'Book').to.throw(`The book you are looking for is not here!`))
            expect(() => library.findBook(["Troy", "Life Style", "Torronto"], 'HEY').to.throw(`The book you are looking for is not here!`))
        })
    })
    describe("arrangeTheBooks", () => {
        it('invalid path', () => {
            expect(() => library.arrangeTheBooks(-1).to.throw(`Invalid input`))
            expect(() => library.arrangeTheBooks(0).to.throw(`Invalid input`))
            expect(() => library.arrangeTheBooks('1').to.throw(`Invalid input`))
            expect(() => library.arrangeTheBooks([1]).to.throw(`Invalid input`))
            expect(() => library.arrangeTheBooks({}).to.throw(`Invalid input`))
        })
        it('happy path', () => {
            expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`)
            expect(library.arrangeTheBooks(42)).to.equal(`Insufficient space, more shelves need to be purchased.`)
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`)
            expect(library.arrangeTheBooks(20)).to.equal(`Great job, the books are arranged.`)
            expect(library.arrangeTheBooks(39)).to.equal(`Great job, the books are arranged.`)
        })
    })
});