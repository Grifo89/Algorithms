function mutation(arr: [a:string, b:string]): boolean {
    const unique = new Set(arr[1].toLowerCase())
    const checkerArray = arr[1]
                            .toLowerCase()
                            .split('')
                            .filter(x => arr[0].toLowerCase().split('').includes(x))
    const checkerSet = new Set(checkerArray)
    return unique.size === checkerSet.size && [...unique].every(x => checkerSet.has(x))
}


console.log(mutation(["Noel", "Ole"]))