function isValid(s) {
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map) {
            const lastChar = stack.pop();
            if (map[char] !== lastChar) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"))