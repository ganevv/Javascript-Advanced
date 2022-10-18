const { expect } = require('chai')
const { carService } = require('./03. Car service_Resources')

describe('Test', () => {

    describe('isItExpensive', () => {

        it('happy path', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('otherPart')).to.equal('The overall price will be a bit cheaper')
            expect(carService.isItExpensive('secondPart')).to.equal('The overall price will be a bit cheaper')
        })
    })

    describe('discount', () => {

        it('invalid input', () => {
            expect(() => carService.discount('string', 1)).to.throw('Invalid input')
            expect(() => carService.discount(1, 'string')).to.throw('Invalid input')
            expect(() => carService.discount('string', 'string')).to.throw('Invalid input')
            expect(() => carService.discount([], 1)).to.throw('Invalid input')
            expect(() => carService.discount(1, [])).to.throw('Invalid input')
            expect(() => carService.discount([], [])).to.throw('Invalid input')
        })
        it('percentage discount', () => {
            expect(carService.discount(5, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`)
        })
        it('percentage discount edge case', () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        })
        it('without discount', () => {
            expect(carService.discount(1, 100)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(2, 100)).to.equal(`You cannot apply a discount`)
        })

    })

    describe('partsToBuy', () => {

        it('invalid input', () => {
            expect(() => carService.partsToBuy('string', 1)).to.throw('Invalid input')
            expect(() => carService.partsToBuy(1, 'string')).to.throw('Invalid input')
            expect(() => carService.partsToBuy('string', 'string')).to.throw('Invalid input')
            expect(() => carService.partsToBuy(1, 1)).to.throw('Invalid input')
            expect(() => carService.partsToBuy([], 'string')).to.throw('Invalid input')
            expect(() => carService.partsToBuy('string', [])).to.throw('Invalid input')
            expect(() => carService.partsToBuy([], 1)).to.throw('Invalid input')
            expect(() => carService.partsToBuy(1, [])).to.throw('Invalid input')
        })
        it('calculate total sum', () => {
            expect(carService.partsToBuy([{ part: 'blowoffValve', price: 145 }, { part: 'coilSprings', price: 230 }, { part: 'injectors', price: 200 }], ['blowoffValve', 'injectors'])).to.equal(345)
            expect(carService.partsToBuy([{ part: 'blowoffValve', price: 145 }, { part: 'coilSprings', price: 230 }, { part: 'injectors', price: 200 }], ['coilSprings', 'injectors'])).to.equal(430)
        })
        it('empty parts catalog', () => {
            expect(carService.partsToBuy([], ['blowoffValve', 'injectors'])).to.equal(0)
        })
    })
})