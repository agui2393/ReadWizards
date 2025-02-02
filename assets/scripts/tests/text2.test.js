const questions = require("../Questions")



test("The questions should not be empty", () => {
    expect(questions).not.toBeNull()

})

test("The questions array should have 3 questions", () => {

    expect(questions.length).toEqual(3)

})