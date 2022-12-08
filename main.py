import time

asciiCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2"]

def current_milli_time():
    return round(time.time() * 1000)

def encode(phraseAEncoder):
    date = str(current_milli_time())
    dateArr = list(date)[-6:]
    strArray = list(phraseAEncoder)

    for i in range(strArray):
        letter = strArray[i]
        number = dateArr[i]
        index = asciiCharacters.index(letter) + number;


encode()
