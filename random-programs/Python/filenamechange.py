import OS

def rename_files():
    file_list = os.listdir(r"c:\my documents")
    print(file_list)
    saved_path = os.getcwd()
    print("Current working directory is "+saved_path)
    os.chdir(r"c:\my documents")
    for file_name in file_list:
        os.rename(file_name, file_name.translate(None, "0123456789"))
    os.chdir(saved_path)