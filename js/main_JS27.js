// Chapter 27: Regex Basics
// Quick Concepts outline 1: Character sets

// [enl] : include three character: e, n, l
//         Each one is a match even though side by side. They are individual matches.

// [^enl] : except three character: e, n, l
//         Each one is not a match include space and marks.

// [a-z] : only select all lowercase letters.

// [A-Z] : only select all Uppercase letters.

// case insensitive: select lowercase or capital case letters.

// [0-9] : only select 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


// Quick Concepts outline 2: Character Types
// . : select everything except the new line character.

// \n\r : 

// \w : indicates all word characters and select the numbers individually, but it did not select the hyphen or the spaces or the apostrophe it would select an underscore

// \d : select digits and numbers

// \D : everything except digits

// \s : select space

// \S : everything except white space

// Example #1 [\s\S]
// Example #2 [^I]
// Example #3 d$
// Example #4 {old}
// Example #5 {?:old}
// Example #6 g{?:old}
// Example #7 g{?=old}


// Quick Concepts outline 3: Quantifiers
// Example #1 [A-Z]\w+
// Example #2 [A-Z][a-z]*
// Example #3 [A-Z][a-z]*'*[a-z]*
// Example #4 \d
// Example #5 \d{3}
// Example #6 \d{3,}


// Quick Concepts outline 4: Optional
// Example #1            {hear}
// Example #2 optional : {hear}?t
// Example #3            {hear}t


// Quick Concepts outline 5: Greedy
// Example #1 h\w+
// Example #2 h\w+?


// Quick Concepts outline 6: Alternating
// Example #1               (g|l)
// Example #2 alternation : (g|l)ive


// Quick Concepts outline 7: Praticle examples
// Example #1 digit: ^\d
// Example #2 digit: ^\d+
// Example #3 digit: ^\d{5}
// Example #4 digit: ^\d{5}$
// Example #5 digit: {^\d(5)$}
// Example #6 digit: {^\d(5)}-?(\d(4}$)
// Example #7 digit: {^\d(5)}-?(\d(4}$)?


// Quick Concepts outline 8: select white space
// number / integer
// Example #1 white space: \s
// Example #2 white space: \s{2,}

// telphone number
// Example #3 : (\d{4})
// Example #4 : [-]?(\d{4})
// Example #5 : [-, ]?(\d{4})
// Example #6 : (\d{3})?[-, ]?(\d{4})
// Example #6 : (\+1)?[-, ]?(\d{3})?[-, ]?(\d{4})