import os
import zipfile

def unzip_files_in_dir(directory, target_directory):
    for root, _, files in os.walk(directory):
        for filename in files:
            if not filename.endswith(".zip"): continue
            filename_wo_ext = filename.split(".")[0]
            zip_path = os.path.join(root, filename)
            proc_path = os.path.join(root, target_directory)
            os.makedirs(proc_path, exist_ok=True)
            # Extract to the same directory where the ZIP file is located
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                ext_filename = zip_ref.namelist()[0]
                extract_path = zip_ref.extract(ext_filename)
                renamed_path = os.path.join(os.path.dirname(proc_path), f"{filename_wo_ext}.txt")
                print(renamed_path)
                os.rename(extract_path, renamed_path)
                print(proc_path)


# Get the directory path to start from (replace with your actual directory)
read_dir, target_dir = 'data/', "proc-data/"
# Call the function to unzip files in the directory
unzip_files_in_dir(read_dir, target_dir)