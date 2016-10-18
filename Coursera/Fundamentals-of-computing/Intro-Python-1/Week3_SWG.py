# template for "Stopwatch: The Game"

# define global variables
import simplegui

counter = 0
score = 0
total = 0

running = False

# define helper function format that converts time
# in tenths of seconds into formatted string A:BC.D
def format(t):
    tenth = t % 10
    second = int(t / 10) % 10
    minute = int(t / 600) % 600
    tenmin = int(t / 100) % 6
    formatted = str(minute) + ":" + str(tenmin) + str(second) + "." + str(tenth)
    return formatted
    
# define event handlers for buttons; "Start", "Stop", "Reset"
def start():
    global running
    timer.start()   
    running = True

def stop():
    global running, total, counter, score
    timer.stop()
    if running:
        total += 1
        if counter % 5 == 0:
            score += 1
    running = False

def reset():
    global counter, score, total
    counter = 0
    score = 0
    total = 0

# define event handler for timer with 0.1 sec interval
def tick():
    global counter
    counter += 1

# define draw handler
def draw(canvas):
    canvas.draw_text(format(counter), (50, 100), 36, "Red")
    canvas.draw_text(str(score) + "/" + str(total), (50, 50), 24, "gray")
    
# create frame
frame = simplegui.create_frame("StopWatch - The Game", 200, 200)

# register event handlers
timer = simplegui.create_timer(100, tick)
frame.set_draw_handler(draw)
frame.add_button("Start", start)
frame.add_button("Stop", stop)
frame.add_button("Reset", reset)

# start frame
frame.start()
