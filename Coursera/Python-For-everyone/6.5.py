text = "X-DSPAM-Confidence:    0.8475";
position = text.find("0")
slice = text[position:]
fslice = float(slice)
print fslice
