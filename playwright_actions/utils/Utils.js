export const Errors = {
	INVALID_NAME: 'Name is invalid',
	INVALID_LENGTH: 'Name has to be from 2 to 20 characters long',
    NAME_REQUIRED: 'Name required',
    INVALID_NAME_AND_LENGTH: 'Name is invalidName has to be from 2 to 20 characters long',

    INVALID_LAST_NAME: 'Last name is invalid',
    INVALID_LASTNAME_LENGTH: 'Last name has to be from 2 to 20 characters long',
    LAST_NAME_REQUIRED: 'Last name required',
    INVALID_LASTNAME_AND_LENGTH: 'Last name is invalidLast name has to be from 2 to 20 characters long',

    EMAIL_REQUIRED: 'Email required',
    EMAIL_INCORRECT: 'Email is incorrect',

    PASS_REQUIRED: 'Password required',
    PASS_RE_ENTER_REQUIRED: 'Re-enter password required',
    PASS_ERROR: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
    PASS_DONT_MATCH: 'Passwords do not match',
};

export const ErrorData = {
	NUMBERS: '1234',
	SPACE: 'Test test',
    SPECIAL_SYMBOL: 'Test!test',
    KIRILYK_SYMBOL: 'тест',
    TO_SHORT_NAME: 't',
    TO_LONG_NAME: 'qwertyuiopqwertyuiopa',
    ONE_NUMBER: '1',

    WRONG_EMAIL: 'myemailexample.com',

    TO_SHORT_PASS: 'Test_12',
    TO_LONG_PASS: 'Test_1234567890q',
    PASS_ABSENT_NUMBERS: 'TestTest',
    PASS_ABSENT_CAPITAL_LETTER: 'test1test',
    PASS_ONLY_CAPITAL_LETTERS: 'TEST1TEST',
};

export const CorrectData = {
	NAME: 'Name',
    LAST_NAME: 'LastName',
    PASSWORD: 'TEST1test',
    PASSWORD_2: 'TEST2test',
};

export function getEmail(){
    let date = Date.now().toString();
    return `example${date}@example.com`;
}