import time

def time_to_run(code):
    start = time.clock()
    results = eval(code)
    length = time.clock() - start

    return results, length

def spin_loop(n):
    i = 0
    while i < n:
        i = i + 1
    
