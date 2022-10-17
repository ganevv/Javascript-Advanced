let { expect } = require('chai')
let flowerShop = require('./flowerShop.js')

describe("flowerShop", () => {
    describe("calcPriceOfFlowers", () => {
        it('happy path', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 10)).to.equal('You need $20.00 to buy Rose!')
            expect(flowerShop.calcPriceOfFlowers('Rose', 1, 5)).to.equal('You need $5.00 to buy Rose!')
            expect(flowerShop.calcPriceOfFlowers('Rose', 0, 10)).to.equal('You need $0.00 to buy Rose!')
        })
        it('invalid path', () => {
            expect(() => flowerShop.calcPriceOfFlowers(3, 3, 3).to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers(1, 'string', 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 'string').to.throw('Invalid input!'));
        })
    })
    describe("checkFlowersAvailable", () => {
        it('valid path', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])).to.equal('The Rose are available!')
            expect(() => flowerShop.checkFlowersAvailable('Rose', ['Lily', 'Orchid']).to.throw('The Rose are sold! You need to purchase more!'));
        })
    })
    describe("sellFlowers", () => {
        it('invalid path', () => {
            expect(() => flowerShop.sellFlowers(1, 2).to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers([], []).to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers(1, []).to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers('1', '1').to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers('1', 2).to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers([], -1).to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], '5').to.throw('Invalid input!'))
            expect(() => flowerShop.sellFlowers('5', ['Rose', 'Lily', 'Orchid']).to.throw('Invalid input!'))
        })
        it('valid path', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal('Lily / Orchid')
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal('Rose / Orchid')
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal('Rose / Lily')
        })
    })
});