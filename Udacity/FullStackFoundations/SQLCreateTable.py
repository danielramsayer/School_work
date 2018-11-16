import sqlite3
conn = sqlit3.connect('restaurantmenu.db')

c= conn.cursor()
c.execute('''
            CREATE TABLE restaurant
            (id INTEGER PRIMARY KEY ASC, name varchar(250) NOT NULL)
            ''')
