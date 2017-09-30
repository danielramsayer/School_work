def reverse(x):
        x = str(x)
        #print x[::-1]

        if x[0] == '-':
            x = x[1:]
            reversed = x[::-1]
            total = int("-"+reversed)
        else:
            reversed = x[::-1]
            total = int(reversed)

        if -2147483647 <= total <= 2147483647:
            print total
        else:
            print 0

reverse(12300123)
