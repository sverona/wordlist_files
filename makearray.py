from json import load, dump

with open("wj3.json") as f:
    words = load(f)

array = []
for word, data in words.items():
    print(word)
    data['word'] = word
    array.append(data)

with open("wj3-array.json", "w") as f:
    dump(array, f)
