// Your code here
// defines saturdayFun function declaration..
// functon exists 
// uses the default activity 'roller-skate with no 
// arguments are passed 
// permits the default activity to be overriden 
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//defines mondayWork function expression 
// function exists 
// uses default activity 'go to the office' when 
// no arguments are passed 
// permits default acticity to be overridden 
let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

// defines wrapAdjective function according to 
// function exists 
// when initialized with '*' creates a function that 
// when called, wraps an adjective in a highlight 
// when initialized with '||' creates a function that, 
// when called, wraps an adjective in a highlight
function wrapAdjective(style= '*') {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }

}
