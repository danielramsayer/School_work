#Challenge 0: 2^38, print it out.

print(2**38)

#Challengge 2: K->M, O->Q, E->G or a ceasar cipher.
cipher = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

print(''.join([chr(((ord(letter) + 2) - ord('a')) % 26 + ord('a')) if letter >= 'a' and letter <= 'z' else letter for letter in cipher]))
