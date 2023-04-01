let isIsomorphic: (str1: string, str2: string) => boolean
type Mapping = {
    [mapping: string]: string
}

isIsomorphic = (str1, str2) => {
    let mapping_s_t: Mapping = {}
    let mapping_t_s: Mapping = {}

    if (str1.length !== str2.length) return false

    str1.split("").forEach((letter: string, idx: number ) => {
        mapping_s_t[letter] = str2[idx]
        mapping_t_s[str2[idx]] = letter
    })

    if(Object.keys(mapping_s_t).join("") === Object.values(mapping_t_s).reverse().join("")){
        return true
    } else {
        return false
    }
 
}