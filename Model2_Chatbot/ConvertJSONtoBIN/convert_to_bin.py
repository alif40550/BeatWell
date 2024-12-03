import json
import pickle

with open("intents.json", "r") as json_file:
    data = json.load(json_file)

with open("intents.bin", "wb") as bin_file:
    pickle.dump(data, bin_file)

print("File JSON berhasil dikonversi ke .bin!")

with open("intents.bin", "rb") as bin_file:
    data = pickle.load(bin_file)

print(data)