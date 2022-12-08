import time

def current_milli_time():
    return round(time.time() * 1000)

def encode(phraseAEncoder):
    date = str(current_milli_time())
    arr = list(date)[-6:]


encode()
