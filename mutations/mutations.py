from typing import List

def mutation(arr: List[str]) -> bool:
    checker = [x for x in arr[1].lower() if list(arr[0].lower()).count(x) == 0]
    if len(checker):
        return False
    return True

print(mutation(["hello", "hey"]))
print(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
print(mutation(["Mary", "Army"]))
print(mutation(["hello", "neo"]))