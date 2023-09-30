// Define a dictionary of keys and values for replacement
var toReplace = {
    // he/she equivalents
    "he/she": "they",
    "He/she": "They",
    "He/She": "They",
    "he or she": "they",
    "He or she": "they",
    "He or She": "They",
    "He Or She": "They",

    // his/her equivalents
    "his/her": "their",
    "His/her": "Their",
    "His/Her": "Their",
    "his or her": "their",
    "His or her": "their",
    "His or Her": "Their",
    "His Or Her": "Their",

    // his/hers equivalents
    "his/hers": "their",
    "His/hers": "Their",
    "His/Hers": "Their",
    "his or hers": "their",
    "His or hers": "thier",
    "His or Hers": "Thier",
    "His Or Hers": "Thier",

    // His/herself
    "his/herself": "themself",
    "His/herself": "Themself",
    "His/Herself": "Themself",
    "his or herself": "themself",
    "His or herself": "themself",
    "His or Herself": "Themself",
    "His Or Herself": "Themself",

    // Him/her
    "him/her": "them",
    "Him/her": "Them",
    "Him/Her": "Them",
    "him or her": "them",
    "Him or her": "Them",
    "Him or Her": "Them",
    "Him Or Her": "Them",

    // He/she's
    "he/she's": "their",
    "He/she's": "Their",
    "He/She's": "Their",
    "he or she's": "their",
    "He or she's": "their",
    "He or She's": "Their",
    "He Or She's": "Their",

    // He's/she's
    "he's/she's": "their",
    "He's/she's": "Their",
    "He's/She's": "Their",
    "he's or she's": "their",
    "He's or she's": "their",
    "He's or She's": "Their",
    "He's Or She's": "Their",

    // fun stuff
    // its garbanzo bean not chickpea.
    "chickpea": "garbanzo bean",
    "Chickpea": "Garbanzo bean",
    "chickpeas": "garbanzo beans",
    "Chickpeas": "Garbanzo beans"

};

var found = 0;

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        var text = node.textContent;
        for (var key in toReplace) {
            var keyRegex = new RegExp("\\b" + key + "\\b", "g");
            text = text.replace(keyRegex, function(match) {
                found++;
                return toReplace[match];
            });
        }
        node.textContent = text;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i]);
        }
    }
}

replaceText(document.body);
changeText(found.toString())

function changeText(text) {
    (async () => {
        const response = await chrome.runtime.sendMessage({badge: text});
    })();
}