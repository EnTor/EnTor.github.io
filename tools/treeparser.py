

tree_list_latin = []
tree_list_eng = []

with open('trees.txt') as f:
    i = 0
    for line in f.readlines():
        words = line.split(' ')
        assert(len(words) > 5)
        tree_list_latin.append(words[1] + ' ' + words[2])
        tree_list_eng.append(words[3] + ' ' + words[4])
        print('{eng: \'' + tree_list_eng[i] + '\', latin: \'' + tree_list_latin[i] + '\'},')
        i += 1
