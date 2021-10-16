const rewire = require("rewire")
const FriendList = rewire("./FriendList")
const mapStateToProps = FriendList.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ FriendList: { friends: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ FriendList: { friends: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ FriendList: { friends: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ FriendList: { friends: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ FriendList: { friends: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
